/**
 * 思路：很容易想到使用排序，但双指针复杂度更低，可以找到从大到小的值
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  const res = new Array<number>()
  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res.unshift(Math.pow(nums[right], 2))
      right--
    } else {
      res.unshift(Math.pow(nums[left], 2))
      left++
    }
  }

  return res
}
