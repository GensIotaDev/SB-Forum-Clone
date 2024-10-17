export interface TreeNode<T> {
  parent: TreeNode<T> | null,
  data: T,
  children: TreeNode<T>[]
}
