/**
 * 思路：dp,难点是思考到，从点 x 出发得到的最大分数为，点 x 右下角的最大值减去点 x
 * 因为无论路径多长，a -> b -> c 结果 c - b + b - a = c - a
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 */

function maxScore(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let res = Number.MIN_SAFE_INTEGER

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const right = j + 1 < n ? dp[i][j + 1] : Number.MIN_SAFE_INTEGER
      const bottom = i + 1 < m ? dp[i + 1][j] : Number.MIN_SAFE_INTEGER
      res = Math.max(right - grid[i][j], bottom - grid[i][j], res)
      dp[i][j] = Math.max(right, bottom, grid[i][j])
    }
  }

  return res
}
