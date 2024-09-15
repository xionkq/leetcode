/**
 * 思路：使用 Set 记录所有经过的点，其长度则为结果
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function numberOfPoints(nums: number[][]): number {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= nums[i][1]; j++) {
      !set.has(j) && set.add(j)
    }
  }

  return set.size
}
