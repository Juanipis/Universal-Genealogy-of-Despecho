#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ts from "typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TREE_DATA_PATH = path.resolve(__dirname, "../src/config/treeData.ts");
const ARTIST_IMAGES_PATH = path.resolve(
  __dirname,
  "../src/config/artistImages.ts",
);

const VALID_BRANCHES = new Set(["mex", "pop", "urb", "emo", "salsa"]);

function fail(message) {
  console.error(message);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith("--")) continue;
    const value = argv[i + 1];
    args[key.slice(2)] = value;
    i += 1;
  }
  return args;
}

function requireArg(args, name) {
  if (!args[name]) {
    fail(`Falta el argumento --${name}`);
  }
  return args[name];
}

function getStringLiteralValue(node) {
  return ts.isStringLiteral(node) ? node.text : undefined;
}

function getPropertyByName(objLiteral, name) {
  return objLiteral.properties.find(
    (prop) =>
      ts.isPropertyAssignment(prop) &&
      ((ts.isIdentifier(prop.name) && prop.name.text === name) ||
        (ts.isStringLiteral(prop.name) && prop.name.text === name)),
  );
}

function createCopyLocale(name, title, tooltip, placeholder) {
  const entries = [
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("name"),
      ts.factory.createStringLiteral(name),
    ),
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("title"),
      ts.factory.createStringLiteral(title),
    ),
  ];

  if (tooltip) {
    entries.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier("tooltip"),
        ts.factory.createStringLiteral(tooltip),
      ),
    );
  }

  if (placeholder) {
    entries.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier("placeholder"),
        ts.factory.createStringLiteral(placeholder),
      ),
    );
  }

  return ts.factory.createObjectLiteralExpression(entries, true);
}

function buildArtistNode(args) {
  const id = requireArg(args, "id");
  const branch = requireArg(args, "branch");
  const nameEs = requireArg(args, "name-es");
  const titleEs = requireArg(args, "title-es");
  const nameEn = requireArg(args, "name-en");
  const titleEn = requireArg(args, "title-en");

  if (!VALID_BRANCHES.has(branch)) {
    fail(`Branch inválida "${branch}". Usa: ${Array.from(VALID_BRANCHES).join(", ")}`);
  }

  const imageKey = args["image-key"] || nameEs;
  const placeholderEs = args["placeholder-es"] || nameEs;
  const placeholderEn = args["placeholder-en"] || nameEn;

  const properties = [
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("id"),
      ts.factory.createStringLiteral(id),
    ),
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("branch"),
      ts.factory.createStringLiteral(branch),
    ),
  ];

  if (args.variant) {
    properties.push(
      ts.factory.createPropertyAssignment(
        ts.factory.createIdentifier("variant"),
        ts.factory.createStringLiteral(args.variant),
      ),
    );
  }

  properties.push(
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("image"),
      ts.factory.createCallExpression(ts.factory.createIdentifier("img"), undefined, [
        ts.factory.createStringLiteral(imageKey),
      ]),
    ),
  );

  const copyEs = createCopyLocale(
    nameEs,
    titleEs,
    args["tooltip-es"],
    placeholderEs,
  );
  const copyEn = createCopyLocale(
    nameEn,
    titleEn,
    args["tooltip-en"],
    placeholderEn,
  );

  properties.push(
    ts.factory.createPropertyAssignment(
      ts.factory.createIdentifier("copy"),
      ts.factory.createObjectLiteralExpression(
        [
          ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier("es"),
            copyEs,
          ),
          ts.factory.createPropertyAssignment(
            ts.factory.createIdentifier("en"),
            copyEn,
          ),
        ],
        true,
      ),
    ),
  );

  return ts.factory.createObjectLiteralExpression(properties, true);
}

function findTreeDataInitializer(sourceFile) {
  let initializer;
  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isVariableStatement(node) &&
      node.declarationList.declarations.length > 0
    ) {
      const decl = node.declarationList.declarations[0];
      if (
        ts.isIdentifier(decl.name) &&
        decl.name.text === "treeData" &&
        decl.initializer &&
        ts.isObjectLiteralExpression(decl.initializer)
      ) {
        initializer = decl.initializer;
      }
    }
  });
  return initializer;
}

function hasId(node, targetId) {
  if (!ts.isObjectLiteralExpression(node)) return false;
  const idProp = getPropertyByName(node, "id");
  const idValue =
    idProp &&
    ts.isPropertyAssignment(idProp) &&
    getStringLiteralValue(idProp.initializer);

  if (idValue === targetId) return true;

  const childrenProp = getPropertyByName(node, "children");
  if (
    childrenProp &&
    ts.isPropertyAssignment(childrenProp) &&
    ts.isArrayLiteralExpression(childrenProp.initializer)
  ) {
    return childrenProp.initializer.elements.some((el) =>
      ts.isObjectLiteralExpression(el) ? hasId(el, targetId) : false,
    );
  }

  return false;
}

function addChildToTree(node, parentId, childNode) {
  let added = false;

  const idProp = getPropertyByName(node, "id");
  const idValue =
    idProp &&
    ts.isPropertyAssignment(idProp) &&
    getStringLiteralValue(idProp.initializer);

  const updatedProperties = node.properties.map((prop) => prop);

  if (idValue === parentId) {
    const childrenProp = getPropertyByName(node, "children");

    if (
      childrenProp &&
      ts.isPropertyAssignment(childrenProp) &&
      ts.isArrayLiteralExpression(childrenProp.initializer)
    ) {
      const newChildren = ts.factory.updateArrayLiteralExpression(
        childrenProp.initializer,
        [...childrenProp.initializer.elements, childNode],
      );
      const newChildrenProp = ts.factory.updatePropertyAssignment(
        childrenProp,
        childrenProp.name,
        newChildren,
      );
      const idx = updatedProperties.indexOf(childrenProp);
      updatedProperties[idx] = newChildrenProp;
    } else {
      updatedProperties.push(
        ts.factory.createPropertyAssignment(
          ts.factory.createIdentifier("children"),
          ts.factory.createArrayLiteralExpression([childNode], true),
        ),
      );
    }

    added = true;
  } else {
    const childrenProp = getPropertyByName(node, "children");
    if (
      childrenProp &&
      ts.isPropertyAssignment(childrenProp) &&
      ts.isArrayLiteralExpression(childrenProp.initializer)
    ) {
      const updatedElements = [];
      for (const el of childrenProp.initializer.elements) {
        if (added) {
          updatedElements.push(el);
          continue;
        }
        if (ts.isObjectLiteralExpression(el)) {
          const { updatedNode, wasAdded } = addChildToTree(
            el,
            parentId,
            childNode,
          );
          updatedElements.push(updatedNode);
          if (wasAdded) {
            added = true;
          }
        } else {
          updatedElements.push(el);
        }
      }

      const newChildren = ts.factory.updateArrayLiteralExpression(
        childrenProp.initializer,
        updatedElements,
      );
      const newChildrenProp = ts.factory.updatePropertyAssignment(
        childrenProp,
        childrenProp.name,
        newChildren,
      );
      const idx = updatedProperties.indexOf(childrenProp);
      updatedProperties[idx] = newChildrenProp;
    }
  }

  const updatedNode = ts.factory.updateObjectLiteralExpression(
    node,
    updatedProperties,
  );

  return { updatedNode, wasAdded: added };
}

function writeUpdatedTree(sourceFile, updatedTree) {
  const transformer = (context) => {
    const visit = (node) => {
      if (
        ts.isVariableStatement(node) &&
        node.declarationList.declarations.length > 0
      ) {
        const decl = node.declarationList.declarations[0];
        if (
          ts.isIdentifier(decl.name) &&
          decl.name.text === "treeData" &&
          decl.initializer &&
          ts.isObjectLiteralExpression(decl.initializer)
        ) {
          const newDecl = ts.factory.updateVariableDeclaration(
            decl,
            decl.name,
            decl.exclamationToken,
            decl.type,
            updatedTree,
          );
          const newDeclList = ts.factory.updateVariableDeclarationList(
            node.declarationList,
            [newDecl],
          );
          return ts.factory.updateVariableStatement(
            node,
            node.modifiers,
            newDeclList,
          );
        }
      }
      return ts.visitEachChild(node, visit, context);
    };
    return (node) => ts.visitNode(node, visit);
  };

  const result = ts.transform(sourceFile, [transformer]);
  const transformedSourceFile = result.transformed[0];
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const newContent = printer.printFile(transformedSourceFile);
  fs.writeFileSync(TREE_DATA_PATH, newContent, "utf8");
  result.dispose();
}

function maybeUpdateArtistImages(imageKey, imagePath) {
  if (!imagePath) return;

  const text = fs.readFileSync(ARTIST_IMAGES_PATH, "utf8");
  const sourceFile = ts.createSourceFile(
    "artistImages.ts",
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  let initializer;
  ts.forEachChild(sourceFile, (node) => {
    if (
      ts.isVariableStatement(node) &&
      node.declarationList.declarations.length > 0
    ) {
      const decl = node.declarationList.declarations[0];
      if (
        ts.isIdentifier(decl.name) &&
        decl.name.text === "artistImages" &&
        decl.initializer &&
        ts.isObjectLiteralExpression(decl.initializer)
      ) {
        initializer = decl.initializer;
      }
    }
  });

  if (!initializer) {
    fail("No se pudo leer artistImages.ts");
  }

  const alreadyExists = initializer.properties.some(
    (prop) =>
      ts.isPropertyAssignment(prop) &&
      ts.isStringLiteral(prop.name) &&
      prop.name.text === imageKey,
  );

  if (alreadyExists) {
    console.log(`La clave "${imageKey}" ya existe en artistImages.ts, no se modifica.`);
    return;
  }

  const newProperty = ts.factory.createPropertyAssignment(
    ts.factory.createStringLiteral(imageKey),
    ts.factory.createStringLiteral(imagePath),
  );

  const updatedInitializer = ts.factory.updateObjectLiteralExpression(
    initializer,
    [...initializer.properties, newProperty],
  );

  const transformer = (context) => {
    const visit = (node) => {
      if (
        ts.isVariableStatement(node) &&
        node.declarationList.declarations.length > 0
      ) {
        const decl = node.declarationList.declarations[0];
        if (
          ts.isIdentifier(decl.name) &&
          decl.name.text === "artistImages" &&
          decl.initializer
        ) {
          const newDecl = ts.factory.updateVariableDeclaration(
            decl,
            decl.name,
            decl.exclamationToken,
            decl.type,
            updatedInitializer,
          );
          const newDeclList = ts.factory.updateVariableDeclarationList(
            node.declarationList,
            [newDecl],
          );
          return ts.factory.updateVariableStatement(
            node,
            node.modifiers,
            newDeclList,
          );
        }
      }
      return ts.visitEachChild(node, visit, context);
    };
    return (node) => ts.visitNode(node, visit);
  };

  const result = ts.transform(sourceFile, [transformer]);
  const transformed = result.transformed[0];
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const newContent = printer.printFile(transformed);
  fs.writeFileSync(ARTIST_IMAGES_PATH, newContent, "utf8");
  result.dispose();
  console.log(`Actualizado artistImages.ts con "${imageKey}" -> "${imagePath}".`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const parentId = requireArg(args, "parent");

  const sourceText = fs.readFileSync(TREE_DATA_PATH, "utf8");
  const sourceFile = ts.createSourceFile(
    "treeData.ts",
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );

  const treeInitializer = findTreeDataInitializer(sourceFile);
  if (!treeInitializer) {
    fail("No se pudo encontrar treeData en treeData.ts");
  }

  const newArtistNode = buildArtistNode(args);

  if (hasId(treeInitializer, args.id)) {
    fail(`Ya existe un nodo con id "${args.id}". Usa otro id.`);
  }

  const { updatedNode, wasAdded } = addChildToTree(
    treeInitializer,
    parentId,
    newArtistNode,
  );

  if (!wasAdded) {
    fail(`No se encontró el parent con id "${parentId}".`);
  }

  writeUpdatedTree(sourceFile, updatedNode);
  maybeUpdateArtistImages(args["image-key"] || args["name-es"], args["image-path"]);

  console.log(
    `Listo. Se agregó "${args["name-es"]}" (${args.id}) como hijo de "${parentId}".`,
  );
}

main();
