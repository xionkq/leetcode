/**
 * 思路：双指针，一个指头，一个指中间，同时向右（为何这样做是对的还没搞清楚）
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function maxNumOfMarkedIndices(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const middle = Math.floor(nums.length / 2)
  let left = 0
  let right = middle
  let res = 0

  while (left < middle && right < nums.length) {
    if (2 * nums[left] <= nums[right]) {
      res += 2
      left++
      right++
    } else {
      right++
    }
  }

  return res
}
