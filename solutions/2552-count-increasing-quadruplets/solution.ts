/**
 * 思路：通过枚举 j、k，从左边找固定 j 位置符合条件的 i，从右边找固定 k 位置符合条件的 l
 * 两者相乘即为固定 j、k 位置的答案，遍历所有 jk 位置相加即可
 * 时间复杂度：O(n ** 3)
 * 空间复杂度：O(1)
 */

function countQuadruplets(nums: number[]): number {
  let res = 0
  for (let j = 0; j < nums.length; j++) {
    for (let k = nums.length - 1; k > j; k--) {
      let left = 0
      for (let i = 0; i < j; i++) {
        nums[i] < nums[j] && nums[i] < nums[k] && left++
      }

      let right = 0
      for (let l = nums.length - 1; l > k; l--) {
        nums[k] < nums[l] && nums[j] < nums[l] && right++
      }

      nums[k] < nums[j] && (res += left * right)
    }
  }

  return res
}
