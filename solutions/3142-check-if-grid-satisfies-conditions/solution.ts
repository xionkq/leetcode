/**
 * 思路：看清题意就好
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function satisfiesConditions(grid: number[][]): boolean {
  for (let i = 0; i < grid[0].length; i++) {
    if (i === grid[0].length - 1) {
      break
    }
    if (grid[0][i] === grid[0][i + 1]) {
      return false
    }
  }

  for (let j = 0; j < grid.length; j++) {
    if (j === grid.length - 1) {
      break
    }
    if (grid[j].join('') !== grid[j + 1].join('')) {
      return false
    }
  }

  return true
}
