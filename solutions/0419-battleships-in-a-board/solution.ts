/**
 * 思路：暴力解法：1.遍历二维数组将状态存储；2.创建remove函数将同一船只的所有节点删除；3.遍历二维数组发现船只则将其删除
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 */

function countBattleships(board: string[][]): number {
  if (!board.length) {
    return 0
  }

  let result = 0
  // @ts-ignore
  const map: Map<string, boolean> = new Map()
  const maxRow = board.length
  const maxColumn = board[0].length

  board.forEach((bs, i) => {
    bs.forEach((b, j) => {
      map.set(`${i},${j}`, b === '.')
    })
  })

  const removeShip = (row: number, column: number): boolean => {
    if (row < 0 || row >= maxRow || column < 0 || column >= maxColumn) {
      return true
    }
    if (map.get(`${row},${column}`)) {
      return true
    }
    board[row][column] = '.'
    map.set(`${row},${column}`, true)
    return removeShip(row, column - 1) && removeShip(row, column + 1) &&
      removeShip(row - 1, column) && removeShip(row + 1, column)
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
