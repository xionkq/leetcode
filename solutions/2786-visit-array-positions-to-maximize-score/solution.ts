/**
 * 思路：动态规划，创建数组dp用于存储遍历到当前位置时的最大分数
 * 1. 数组第一个元素为当前元素为偶数时可获得的最大分数
 * 2. 数组第二个元素为当前元素为奇数时可获得的最大分数
 * 3. 每遍历一个元素，都记录更新下当前位置可获取的最大值（前一个值奇偶性相同直接相加，否则相加并减去x）
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function maxScore(nums: number[], x: number): number {
  const index = nums[0] % 2
  const dp = [-Infinity, -Infinity]
  dp[index] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      dp[0] = Math.max(dp[1] + nums[i] - x, dp[0] + nums[i])
    } else {
      dp[1] = Math.max(dp[0] + nums[i] - x, dp[1] + nums[i])
    }
  }

  return Math.max(dp[0], dp[1])
}
