/**
 * 思路：所有正数相乘，0 丢弃，偶数个负数相乘
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function maxStrength(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  let res: number | null = null
  let negativeCount = 0
  nums.sort((a, b) => b - a)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeCount++
    } else if (nums[i] > 0) {
      res === null ? (res = nums[i]) : (res *= nums[i])
    }
  }

  negativeCount % 2 === 1 && negativeCount--

  for (let j = nums.length - 1; j >= 0; j--) {
    if (negativeCount <= 0) {
      break
    } else {
      res === null ? (res = nums[j]) : (res *= nums[j])
      negativeCount--
    }
  }

  return res || 0
}
