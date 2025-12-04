import {
  useMemo,
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { branches, treeData } from "../../config/treeData";
import type { BranchId, Locale } from "../../types/tree";
import TreeNodeItem from "./TreeNode";

function Tree() {
  const { i18n, t } = useTranslation();
  const locale = (i18n.language as Locale) || "es";
  const [imageMap, setImageMap] = useState<Record<string, string | undefined>>(
    {}
  );
  const treeContainerRef = useRef<HTMLDivElement | null>(null);

  const accentMap = useMemo(() => {
    const map = {} as Record<BranchId, string>;
    branches.forEach(({ id, accent }) => {
      map[id] = accent;
    });
    return map;
  }, []);

  const centerRootNode = useCallback(
    (behavior: ScrollBehavior = "auto") => {
      const container = treeContainerRef.current;
      if (!container) return;

      const mainNodeEl =
        container.querySelector<HTMLElement>("[data-root-node]");
      if (!mainNodeEl) return;

      const containerRect = container.getBoundingClientRect();
      const nodeRect = mainNodeEl.getBoundingClientRect();
      const offsetFromContainer = nodeRect.left - containerRect.left;
      const targetLeft =
        container.scrollLeft +
        offsetFromContainer -
        containerRect.width / 2 +
        nodeRect.width / 2;

      container.scrollTo({ left: targetLeft, behavior });
    },
    []
  );

  useLayoutEffect(() => {
    centerRootNode();
  }, [centerRootNode, locale]);

  useEffect(() => {
    const handleResize = () => centerRootNode("smooth");
    window.addEventListener("resize", handleResize);

    const observerTarget =
      treeContainerRef.current?.querySelector<HTMLElement>(".tree");
    const resizeObserver = observerTarget
      ? new ResizeObserver(() => centerRootNode())
      : null;

    if (observerTarget && resizeObserver) {
      resizeObserver.observe(observerTarget);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [centerRootNode]);

  const handleImageChange = (nodeId: string, dataUrl: string) => {
    setImageMap((prev) => ({ ...prev, [nodeId]: dataUrl }));
  };

  return (
    <div className="tree-wrapper">
      <div
        ref={treeContainerRef}
        className="tree-container"
        role="tree"
        aria-label={t("pageTitle")}
      >
        <div className="tree">
          <ul>
            <TreeNodeItem
              isRoot
              node={treeData}
              locale={locale}
              accentMap={accentMap}
              imageMap={imageMap}
              onImageChange={handleImageChange}
            />
          </ul>
        </div>
      </div>

      <div className="legend" aria-label={t("legendTitle")}>
        <p className="legend-title">{t("legendTitle")}</p>
        <div className="legend-grid">
          {branches.map((branch) => {
            const copy = branch.copy[locale]?.label || branch.copy.es.label;
            return (
              <div key={branch.id} className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: branch.accent }}
                />
                <span className="legend-label">{copy}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tree;
