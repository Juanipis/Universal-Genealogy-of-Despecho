import TreeNodeCard from './TreeNodeCard'
import type { BranchId, Locale, TreeNode } from '../../types/tree'

interface Props {
  node: TreeNode
  locale: Locale
  accentMap: Record<BranchId, string>
  imageMap: Record<string, string | undefined>
  onImageChange: (nodeId: string, dataUrl: string) => void
  isRoot?: boolean
}

function TreeNodeItem({
  node,
  locale,
  accentMap,
  imageMap,
  onImageChange,
  isRoot = false,
}: Props) {
  return (
    <li
      className={`tree-node${isRoot ? ' tree-node--root' : ''}`}
      data-root-node={isRoot || undefined}
    >
      <TreeNodeCard
        node={node}
        locale={locale}
        accentColor={node.branch ? accentMap[node.branch] : undefined}
        uploadedImage={imageMap[node.id]}
        onImageChange={onImageChange}
      />

      {node.children && node.children.length > 0 ? (
        <ul>
          {node.children.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              locale={locale}
              accentMap={accentMap}
              imageMap={imageMap}
              onImageChange={onImageChange}
              isRoot={false}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default TreeNodeItem
