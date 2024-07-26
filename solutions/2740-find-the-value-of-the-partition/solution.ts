/**
 * 思路：排序后遍历
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function findValueOfPartition(nums: number[]): number {
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((a, b) => a - b)
  nums.reduce((next, item) => {
    res = Math.min(res, Math.abs(next - item))
    return item
  })

  return res
}
