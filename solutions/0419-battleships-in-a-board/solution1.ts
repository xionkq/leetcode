/**
 * 思路：优化一：只扫描船只节点的右和下，因为左和上已扫描；优化二：不用借助map，直接去查看和修改数组
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function countBattleships(board: string[][]): number {
  if (!board.length) {
    return 0
  }

  let result = 0
  const maxRow = board.length
  const maxColumn = board[0].length

  const removeShip = (row: number, column: number): boolean => {
    if (row < 0 || row >= maxRow || column < 0 || column >= maxColumn) {
      return true
    }
    if (board[row][column] === '.') {
      return true
    }
    board[row][column] = '.'
    return removeShip(row, column + 1) && removeShip(row + 1, column)
  }

  board.forEach((bs, i) => {
    bs.forEach((b, j) => {
      if (b === 'X') {
        result++
        removeShip(i, j)
      }
    })
  })

  return result
}
