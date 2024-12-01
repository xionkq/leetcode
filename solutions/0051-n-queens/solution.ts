/**
 * 思路：标记 + 回溯
 * 1. 遍历第 index 行皇后可能出现的位置，将其他行不能出现的位置标记为 "."
 * 2. 遍历第 index + 1 行，若标记为 "." 则跳过，否则标记当前为 "Q"，"Q" 能攻击到的地方标记为 "."
 * 3. 若当前行没有可以标记为 "Q" 的地方，则不会进入回溯
 * 时间复杂度：O(n!)
 * 空间复杂度：O(n)
 */

function solveNQueens(n: number): string[][] {
  const res: string[][] = []
  let current: string[][] = new Array(n).fill(undefined).map(() => new Array(n).fill(''))

  const backTracking = (curRow: number, arr: string[][]) => {
    if (curRow === n) {
      res.push(arr.map((a) => a.join('')))
      return
    }
    for (let curCol = 0; curCol < arr[curRow].length; curCol++) {
      if (arr[curRow][curCol]) {
        continue
      }
      arr[curRow][curCol] = 'Q'
      const newArr = arr.map((row, rowIndex) => {
        if (rowIndex < curRow) {
          return row
        }
        return row.map((col, colIndex) => {
          if (colIndex === curCol && rowIndex === curRow) {
            return col
          }
          if (colIndex === curCol || rowIndex === curRow) {
            return '.'
          }
          if (Math.abs(rowIndex - curRow) === Math.abs(colIndex - curCol)) {
            return '.'
          }
          return col
        })
      })
      backTracking(curRow + 1, newArr)
      arr[curRow][curCol] = '.'
    }
  }

  backTracking(0, current)

  return res
}
