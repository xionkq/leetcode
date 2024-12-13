/**
 * 思路：想不出来好办法，只能想到暴力
 * 时间复杂度：O(n * k)
 * 空间复杂度：O(1)
 */

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
  for (let i = 0; i < k; i++) {
    let m = 0
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[m]) {
        m = j
      }
    }
    nums[m] *= multiplier
  }
  return nums
}
