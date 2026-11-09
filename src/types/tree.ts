export type Locale = "es" | "en";

export type BranchId = "mex" | "pop" | "urb" | "emo" | "salsa";

export type NodeVariant = "king" | "standard";

export interface NodeCopy {
  name: string;
  title: string;
  tooltip?: string;
  placeholder?: string;
}

export interface TreeNode {
  id: string;
  branch?: BranchId;
  variant?: NodeVariant;
  image?: string;
  children?: TreeNode[];
  copy: Record<Locale, NodeCopy>;
}

export interface BranchConfig {
  id: BranchId;
  accent: string;
  copy: Record<Locale, { label: string }>;
}
