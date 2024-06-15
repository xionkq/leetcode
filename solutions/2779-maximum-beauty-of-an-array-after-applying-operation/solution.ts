/**
 * 思路：首先将数组排序，然后通过滑动窗口找出刚好大于nums[start]的nums[end]，该窗口长度的最大值则为结果
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function maximumBeauty(nums: number[], k: number): number {
  const sortedArr = nums.sort((a, b) => a - b)
  const length = sortedArr.length
  let res = 0
  let end = 0

  for (let start = 0; start < length; start++) {
    while (sortedArr[end] <= sortedArr[start] + (2 * k)  && end < length) {
      end++
    }
    res = Math.max(res, end - start)
    if (end >= length) {
      break
    }
  }

  return res
}
