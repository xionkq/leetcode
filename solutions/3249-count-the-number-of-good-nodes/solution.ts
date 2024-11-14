/**
 * 思路：题目中的 0 节点始终为根节点没理解，解答中是按照数组左节点为父节点解答的，过不了但记录一下
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) 递归栈的深度取决于树的高度
 */

function countGoodNodes(edges: number[][]): number {
  let res = 0
  const set = new Set<number>()
  const map = new Map<number, number[]>()
  const nodeCountMap = new Map<number, number>()
  for (let i = 0; i < edges.length; i++) {
    map.set(edges[i][0], [...(map.get(edges[i][0]) || []), edges[i][1]])
    set.add(edges[i][0])
    set.add(edges[i][1])
  }

  function findNodeCount(node: number): number {
    if (nodeCountMap.get(node) !== undefined) {
      return nodeCountMap.get(node)!
    }
    const children = map.get(node)!
    let res = 1
    if (children) {
      for (let i = 0; i < children.length; i++) {
        const c = findNodeCount(children[i])
        nodeCountMap.get(children[i]) === undefined && nodeCountMap.set(children[i], c)
        res += c + 1
      }
    }

    nodeCountMap.set(node, res)
    return res
  }

  const arr = Array.from(set)
  for (let i = 0; i < arr.length; i++) {
    const children = map.get(arr[i])!
    if (!children) {
      res++
      continue
    }
    let sameCount = undefined
    let isSame = true
    for (let j = 0; j < children.length; j++) {
      if (sameCount === undefined) {
        sameCount = findNodeCount(children[j])
      } else if (sameCount !== findNodeCount(children[j])) {
        isSame = false
        break
      }
    }
    isSame && ++res
  }

  return res
}
