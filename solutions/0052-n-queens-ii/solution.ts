/**
 * 思路：上一题的简化版本，当判断一个位置是否可以放置皇后时，需要判断三个条件
 * 1. 同一列不可有皇后，通过维护一个列集合判断
 * 2. 左斜线不可有皇后，计算得知同一左斜线中，row + col 一定相等，通过维护 row + col 集合判断
 * 3. 右斜线不可有皇后，计算得知同一右斜线中，row - col 一定相等，通过维护 row - col 集合判断
 * 时间复杂度：O(n!)
 * 空间复杂度：O(n)
 */

function totalNQueens(n: number): number {
  const columns: Set<number> = new Set()
  const diagonal1: Set<number> = new Set()
  const diagonal2: Set<number> = new Set()

  function backtrack(row: number): number {
    if (row === n) {
      return 1
    } else {
      let count = 0
      for (let i = 0; i < n; i++) {
        if (columns.has(i) || diagonal1.has(row - i) || diagonal2.has(row + i)) {
          continue
        }
        columns.add(i)
        diagonal1.add(row - i)
        diagonal2.add(row + i)
        count += backtrack(row + 1)
        columns.delete(i)
        diagonal1.delete(row - i)
        diagonal2.delete(row + i)
      }
      return count
    }
  }

  return backtrack(0)
}
