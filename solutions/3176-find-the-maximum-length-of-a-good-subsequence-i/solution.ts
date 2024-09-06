/**
 * 思路：由前一个状态计算后一个状态用 dp，dp 一般是多维数组
 * 时间复杂度：O(k * n * n)
 * 空间复杂度：O(K * n)
 */

function maximumLength(nums: number[], k: number): number {
  const dp = new Array(nums.length).fill(0).map(() => new Array(k + 1).fill(0))
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    for (let h = 0; h <= k; h++) {
      for (let j = 0; j < i; j++) {
        if (nums[j] === nums[i]) {
          // dp[i] 通过 dp[j] 计算而来，最终结果为 dp[j] 最大值 +1，
          dp[i][h] = Math.max(dp[i][h], dp[j][h])
        } else {
          dp[j][h - 1] !== undefined && (dp[i][h] = Math.max(dp[i][h], dp[j][h - 1]))
        }
      }
      dp[i][h]++
      // 每计算一个值记录最大值
      res = Math.max(res, dp[i][h])
    }
  }

  return res
}
