/**
 * 思路：奇数加偶数一定等于奇数，否则返回结果 false
 * 时间复杂度：O(n)
 * 空间复杂度：O(0)
 */

function isArraySpecial(nums: number[]): boolean {
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i - 1] + nums[i]) % 2 === 0) {
      return false
    }
  }
  return true
}
