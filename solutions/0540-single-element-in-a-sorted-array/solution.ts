/**
 * 思路：找规律，二分查找，发现使用了递归，空间复杂度不满足要求
 * 时间复杂度：O(log n)
 * 空间复杂度：O(log n)
 */

function singleNonDuplicate(nums: number[]): number {
  const half = Math.floor(nums.length / 2)
  const isHalfOdd = half % 2 === 1
  if (nums[half] === nums[half - 1] && nums[half] !== nums[half + 1]) {
    return isHalfOdd ? singleNonDuplicate(nums.slice(half + 1)) : singleNonDuplicate(nums.slice(0, half - 1))
  } else if (nums[half] === nums[half + 1] && nums[half] !== nums[half - 1]) {
    return isHalfOdd ? singleNonDuplicate(nums.slice(0, half)) : singleNonDuplicate(nums.slice(half + 2))
  } else {
    return nums[half]
  }
}
