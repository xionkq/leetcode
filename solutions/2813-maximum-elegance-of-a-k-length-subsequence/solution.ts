/**
 * 思路：暴力遍历，通过回溯算法遍历所有情况，并将结果的最大值记录下来，时间复杂度过高
 * 时间复杂度：O(2^n)
 * 空间复杂度：O(n + k)
 */

function findMaximumElegance(items: number[][], k: number): number {
  let totalP = 0
  // @ts-ignore
  const cMap = new Map()
  let current = 0
  let result = 0

  const backtracking = (start: number, count: number) => {
    if (count === 0) {
      return
    }
    for (let i = start; i <= items.length - count; i++) {
      const [p, c] = items[i]
      totalP += p
      cMap.set(c, (cMap.get(c) || 0) + 1)
      const tempCurr = current
      current = totalP + cMap.size ** 2
      result = Math.max(result, current)

      backtracking(i + 1, count - 1)
      totalP -= p
      cMap.get(c) === 1 ? cMap.delete(c) : cMap.set(c, cMap.get(c) - 1)
      current = tempCurr
    }
  }

  backtracking(0, k)
  return result
}
