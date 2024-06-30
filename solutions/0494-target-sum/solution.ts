/**
 * 思路：暴力解法，遍历每种可能的情况，求出其和与target相等的情况
 * 时间复杂度：O(2 ^ n)
 * 空间复杂度：O(n)
 */

function findTargetSumWays(nums: number[], target: number): number {
  let res = 0
  let current = 0
  const backTracking = (index: number) => {
    if (index === nums.length) {
      current === target && res++
      return
    }

    current += nums[index]
    backTracking(index + 1)
    current -= nums[index]

    current -= nums[index]
    backTracking(index + 1)
    current += nums[index]
  }

  backTracking(0)
  return res
}
