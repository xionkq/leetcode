/**
 * 思路：略
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function semiOrderedPermutation(nums: number[]): number {
  const index1 = nums.findIndex((num) => num === 1)
  const indexN = nums.findIndex((num) => num === nums.length)
  const toLeft = index1
  const toRight = nums.length - 1 - indexN
  const offset = index1 > indexN ? 1 : 0
  return toLeft + toRight - offset
}
