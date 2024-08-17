/**
 * 思路：题目很难读，但实际上很简单，目的是找到长度为 k 的子串出现最多的次数
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function minimumOperationsToMakeKPeriodic(word: string, k: number): number {
  const length = word.length / k
  const map = new Map<string, number>()
  let res = 0

  for (let i = 0; i < length; i++) {
    const left = i * k
    const right = (i + 1) * k
    const subStr = word.slice(left, right)
    const count = map.get(subStr) || 0
    map.set(subStr, count + 1)
    res = Math.max(res, count + 1)
  }

  return length - res
}
