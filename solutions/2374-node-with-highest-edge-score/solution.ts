/**
 * 思路：一次遍历，不过似乎使用 array 比 map 快一些
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function edgeScore(edges: number[]): number {
  const map = new Map<number, number>()
  let max = 0
  let maxIndex = -1
  for (let i = 0; i < edges.length; i++) {
    map.set(edges[i], (map.get(edges[i]) || 0) + i)
    if (map.get(edges[i]) >= max) {
      map.get(edges[i]) === max ? (maxIndex = Math.min(maxIndex, edges[i])) : (maxIndex = edges[i])
      max = map.get(edges[i])!
    }
  }
  return maxIndex
}
