/**
 * 思路：不保存二分后的数组，只保存左右指针，（看了答案发现我这个二分也太奇怪了，好久没写生疏了）
 * 时间复杂度：O(log n)
 * 空间复杂度：O(1)
 */

function singleNonDuplicate(nums: number[]): number {
  let left = 0
  let right = nums.length
  let half = Math.floor((right - left) / 2)
  let isHalfOdd = half % 2 === 1

  while (nums[half] === nums[half - 1] || nums[half] === nums[half + 1]) {
    if (nums[half] !== nums[half - 1]) {
      isHalfOdd ? (right = half) : (left = half + 2)
    }
    if (nums[half] !== nums[half + 1]) {
      isHalfOdd ? (left = half + 1) : (right = half - 1)
    }
    half = Math.floor((right - left) / 2) + left
    isHalfOdd = half % 2 === 1
  }

  return nums[half]
}
