/**
 * 思路：若一个矩阵横着看是回文的，且竖着看是回文的，则四个角对称地方的值必须相等，因此需要遍历 1 / 4 个矩阵
 * 其次 1 出现的次数必须为 4 的倍数：则矩阵中线中出现 1 的次数必须为 4 的倍数，需要分类讨论
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function minFlips(grid: number[][]): number {
  let res = 0
  const m = grid.length
  const n = grid[0].length
  const isOddRow = m % 2 === 1
  const isOddCol = n % 2 === 1
  const midRow = Math.floor(m / 2)
  const midCol = Math.floor(n / 2)

  for (let i = 0; i < midRow; i++) {
    for (let j = 0; j < midCol; j++) {
      const iBottom = m - 1 - i
      const jRight = n - 1 - j
      let count = [0, 0]
      count[grid[i][j]]++
      count[grid[i][jRight]]++
      count[grid[iBottom][j]]++
      count[grid[iBottom][jRight]]++
      res += Math.min(...count)
    }
  }

  const sameCount = [0, 0]
  let diffCount = 0

  if (isOddRow) {
    for (let j = 0; j < midCol; j++) {
      if (grid[midRow][j] === grid[midRow][n - 1 - j]) {
        sameCount[grid[midRow][j]]++
      } else {
        diffCount++
      }
    }
  }
  if (isOddCol) {
    for (let i = 0; i < midRow; i++) {
      if (grid[i][midCol] === grid[m - 1 - i][midCol]) {
        sameCount[grid[i][midCol]]++
      } else {
        diffCount++
      }
    }
  }
  if (isOddRow && isOddCol) {
    res += grid[midRow][midCol]
  }

  if (sameCount[1] % 2 === 0 || diffCount !== 0) {
    return res + diffCount
  } else {
    return res + diffCount + 2
  }
}
