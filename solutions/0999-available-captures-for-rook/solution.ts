/**
 * 思路：先查出车所在的位置，然后遍历该位置行和列是否有卒
 * 时间复杂度：O(n ** 2)
 * 空间复杂度：O(1)
 */

function numRookCaptures(board: string[][]): number {
  let res = 0
  let x = -1
  let y = -1

  for (let i = 0; i < board.length; i++) {
    if (x !== -1) break
    for (let j = 0; j < board[i].length; j++) {
      if (y !== -1) break
      if (board[i][j] === 'R') {
        ;[x, y] = [i, j]
      }
    }
  }

  let hasTop = false,
    hasBottom = false,
    hasLeft = false,
    hasRight = false
  for (let i = 0; i < board.length; i++) {
    const v = board[i][y]
    if (i < x) {
      v === 'p' && (hasTop = true)
      v === 'B' && (hasTop = false)
    }
    if (i > x) {
      if (v === 'p' || v === 'B') {
        hasBottom = v === 'p'
        break
      }
    }
  }
  for (let j = 0; j < board[0].length; j++) {
    const v = board[x][j]
    if (j < y) {
      v === 'p' && (hasLeft = true)
      v === 'B' && (hasLeft = false)
    }
    if (j > y) {
      if (v === 'p' || v === 'B') {
        hasRight = v === 'p'
        break
      }
    }
  }
  return Number(hasTop) + Number(hasBottom) + Number(hasLeft) + Number(hasRight)
}
