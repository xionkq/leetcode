/**
 * 思路：可将题意转换为，找两个数组的最大公共子序列
 * 1. 创建一个二维数组 dp，长度为 m * n
 * 2. 遍历两个数组每个元素
 * 3. 若元素值相同，则 dp[i][j] 等于 dp[i - 1][j - 1] + 1
 * 4. 否则 dp[i][j] 为前一个元素连线中的最大值
 */

function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    const num1 = nums1[i - 1]

    for (let j = 1; j <= n; j++) {
      const num2 = nums2[j - 1]
      if (num1 === num2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}
