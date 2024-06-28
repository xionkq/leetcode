/**
 * 思路：dp
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(n)
 */

function paintWalls(cost: number[], time: number[]): number {
  const n = cost.length
  // dp[0]代表刷完第0堵墙的最小开销，因此求解dp[n]数组长度应该为n+1
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0

  for (let i = 0; i < n; i++) {
    // 每刷完一面墙都会更新数组中的最小开销
    for (let j = n; j > 0; j--) {
      // 若第i面墙使用免费员工，则没有额外开销
      const freeCost = dp[j]
      // 若第i面墙使用付费员工，由于付费员工工作期间免费员工可以工作，因此花费cost[i]可以刷time[i]+1面墙
      // 其实只需知道刷time[i]+1堵墙要花费cost[i]，并不需要关系i是第几堵
      // 因此结果是第j堵墙减去time[j]+1的时候，花费cost[i],即可到达dp[j]
      const payCost = dp[Math.max(j - (time[i] + 1), 0)] + cost[i]
      dp[j] = Math.min(freeCost, payCost)
    }
  }

  return dp[n]
}
