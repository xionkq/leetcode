/**
 * 思路：暴力解法：循环两次，每次都找一边刚好比当前元素大的元素
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(n)
 */

function nextGreaterElements(nums: number[]): number[] {
  const res = [] as number[]
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    let isFind = false
    for (let j = 1; j < n; j++) {
      const index = i + j >= n ? i + j - n : i + j
      if (nums[index] > num) {
        res.push(nums[index])
        isFind = true
        break
      }
    }
    !isFind && res.push(-1)
  }

  return res
}
