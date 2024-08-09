/**
 * 思路：遍历矩阵，当遍历到 1 时，计算以该点为直角点的直角三角形个数
 * 计算可通过（该行节点值为 1 的个数 - 1） * （该列节点值为 1 的个数 - 1）
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 */

function numberOfRightTriangles(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const countMap = new Map<string, number>()
  let res = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        countMap.set(`row${i}`, (countMap.get(`row${i}`) || 0) + 1)
        countMap.set(`col${j}`, (countMap.get(`col${j}`) || 0) + 1)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const rowCount = countMap.get(`row${i}`)! - 1
        const colCount = countMap.get(`col${j}`)! - 1
        res += rowCount * colCount
      }
    }
  }

  return res
}
