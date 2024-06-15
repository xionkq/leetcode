/**
 * 思路：使用差分数组
 * 1. 记录每个元素所能到达的最小值，该值处自增1
 * 2. 记录每个元素所能到达的最大值+1，即刚好不能达到的值，该值处自减1
 * 3. 数组diff的前缀和即为可以到达该值（索引index）的nums元素个数
 * 时间复杂度：O(n + m + k)，m为数组最大值
 * 空间复杂度：O(m + k)
 */

function maximumBeauty(nums: number[], k: number): number {
  const maxNum = Math.max(...nums)
  // @ts-ignore
  const diff = Array(maxNum + k + 2).fill(0)
  let curr = 0
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    diff[Math.max(nums[i] - k, 0)]++
    diff[nums[i] + k + 1]--
  }

  for (let i = 0; i < diff.length; i++) {
    curr += diff[i]
    res = Math.max(res, curr)
  }

  return res
};
