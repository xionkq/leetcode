/**
 * 思路：由于矩阵列数小于5，因此分类讨论可证明若矩阵存在好子集，就一定存在行数为1或为2的好子集
 * 可通过位运算降低时间复杂度
 * 时间复杂度：O(n * n * m)
 * 空间复杂度：O(1)
 */

function goodSubsetofBinaryMatrix(grid: number[][]): number[] {
  const n = grid.length
  const m = grid[0].length

  for (let i = 0; i < n; i++) {
    if (grid[i].every((item) => item === 0)) {
      return [i]
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let isFind = true
      for (let k = 0; k < m; k++) {
        if (grid[i][k] === 1 && grid[j][k] === 1) {
          isFind = false
          break
        }
      }
      if (isFind) {
        return [i, j]
      }
    }
  }

  return []
}
