/**
 * 思路：排序后秒了
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function countWays(nums: number[]): number {
  let res = 0
  nums.sort((a, b) => a - b)
  for (let len = 0; len <= nums.length; len++) {
    if (len === 0) {
      len < nums[len] && res++
    } else if (len === nums.length) {
      len > nums[len - 1] && res++
    } else {
      len > nums[len - 1] && len < nums[len] && res++
    }
  }

  return res
}
