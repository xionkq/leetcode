/**
 * 官方题解：通过枚举船只左上角节点来给船只计数，达到不修改原数组的目的。若当前节点为船只，却左或上为船只，则已被计数。
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function countBattleships(board: string[][]): number {
  if (!board.length) {
    return 0
  }

  let result = 0

  const isShipHasCounted = (row: number, column: number): boolean => {
    if (row === 0) {
      return board[row][column - 1] === 'X'
    } else if (column === 0) {
      return board[row - 1][column] === 'X'
    }
    return board[row][column - 1] === 'X' || board[row - 1][column] === 'X'
  }

  board.forEach((bs, i) => {
    bs.forEach((b, j) => {
      b === 'X' && !isShipHasCounted(i, j) && result++
    })
  })

  return result
}
