/**
 * 思路：在初始化时候把所有结果求出并缓存，想着会减少后续复杂度，但实际上没必要
 * 时间复杂度：O(n ** 2)
 * 空间复杂度：O(n ** 2)
 */

class NeighborSum {
  grid: number[][]
  valueMap: Map<number, number[]> = new Map<number, number[]>
  adjacentGrid: number[][]
  diagonalGrid: number[][]

  constructor(grid: number[][]) {
    const row = grid.length
    const col = grid[0].length
    this.adjacentGrid = new Array(row).fill(undefined).map(() => new Array(col).fill(0))
    this.diagonalGrid = new Array(row).fill(undefined).map(() => new Array(col).fill(0))

    const updateAdjacentGrid = (i: number, j: number, v: number) => {
      if (i - 1 >= 0) {
        this.adjacentGrid[i - 1][j] += v
      }
      if (i + 1 < row) {
        this.adjacentGrid[i + 1][j] += v
      }
      if (j - 1 > 0) {
        this.adjacentGrid[i][j - 1] += v
      }
      if (j + 1 < col) {
        this.adjacentGrid[i][j + 1] += v
      }
    }

    const updateDiagonalGrid = (i: number, j: number, v: number) => {
      if (i - 1 >= 0 && j - 1 >= 0) {
        this.diagonalGrid[i - 1][j - 1] += v
      }
      if (i + 1 < row && j - 1 >= 0) {
        this.diagonalGrid[i + 1][j - 1] += v
      }
      if (i - 1 >= 0 && j + 1 < col) {
        this.diagonalGrid[i - 1][j + 1] += v
      }
      if (i + 1 < row && j + 1 < col) {
        this.diagonalGrid[i + 1][j + 1] += v
      }
    }

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        this.valueMap.set(grid[i][j], [i, j])
        updateAdjacentGrid(i, j, grid[i][j])
        updateDiagonalGrid(i, j, grid[i][j])
      }
    }
  }

  adjacentSum(value: number): number {
    const [i, j] = this.valueMap.get(value)!
    return this.adjacentGrid[i][j]
  }

  diagonalSum(value: number): number {
    const [i, j] = this.valueMap.get(value)!
    return this.diagonalGrid[i][j]
  }
}
