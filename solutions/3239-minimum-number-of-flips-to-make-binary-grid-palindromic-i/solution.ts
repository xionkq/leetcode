/**
 * 思路：不要想复杂了，直接遍历两次，其实是简单题
 * 借用评论区的一段话："这题的难点在于，如果你不用 for 循环，你的思考就会超时，导致面试失败"
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function minFlips(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  let resRow = 0
  let resCol = 0

  for (let i = 0; i < m; i++) {
    let j = 0
    while (j < (n - j - 1)) {
      if (grid[i][j] !== grid[i][n - j - 1]) {
        resRow++
      }
      j++
    }
  }

  for (let j = 0;j < n; j++) {
    let i = 0
    while (i < m - i - 1) {
      if (grid[i][j] !== grid[m - i - 1][j]) {
        resCol++
      }
      i++
    }
  }

  return Math.min(resCol, resRow)
};
