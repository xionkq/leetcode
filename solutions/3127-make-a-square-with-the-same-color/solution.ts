/**
 * 思路：矩阵固定大小，复杂度均为常数
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

function canMakeSquare(grid: string[][]): boolean {
  const isHsaSame = (x: number, y: number) => {
    const node = grid[x][y]
    const hasSameX = (x - 1 >= 0 && node === grid[x - 1][y]) || (x + 1 <= 2 && node === grid[x + 1][y])
    const hasSameY = (y - 1 >= 0 && node === grid[x][y - 1]) || (y + 1 <= 2 && node === grid[x][y + 1])
    return hasSameX && hasSameY
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (isHsaSame(i, j)) {
        return true
      }
    }
  }

  return false
}
