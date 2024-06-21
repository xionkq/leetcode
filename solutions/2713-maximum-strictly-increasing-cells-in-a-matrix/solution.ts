/**
 * 思路：动态规划，假设每个坐标的值，都是能到达当前坐标的最大步数
 * 1. 由于只能跳转坐标值比当前大的位置，因此使用map记录每个坐标的值和坐标
 * 2. 将map值从小到大排序，从最小值出发
 * 3. 创建rows和cols记录每行和每列最大值
 * 4. 遍历map，当前坐标位置步数最大值为行x和列y中的最大值+1
 * 5. 更新rows和cols
 * 坑：坐标值相同时，需要先计算所有最大值再更新rows，因为坐标相同时不能跳转，否则会导致重复更新
 * 时间复杂度：O(mn * log(mn))，因为数组最大为mn个元素，复杂度为从小到大排序时间
 * 空间复杂度：O(mn)，map最大存储mn个元素
 */

function maxIncreasingCells(mat: number[][]): number {
  const map = new Map<number, [number, number][]>()
  const m = mat.length
  const n = mat[0].length
  const rows = Array(m).fill(0)
  const cols = Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!map.has(mat[i][j])) {
        map.set(mat[i][j], [])
      }
      map.get(mat[i][j])!.push([i, j])
    }
  }

  let res = 0
  const sortedMap = Array.from(map.keys()).sort((a, b) => a - b)
  sortedMap.forEach((item) => {
    const arr = map.get(item)!
    const maxs = arr.map(([x, y]) => Math.max(rows[x], cols[y]) + 1)
    arr.forEach(([x, y], index) => {
      const max = maxs[index]
      rows[x] = Math.max(max, rows[x])
      cols[y] = Math.max(max, cols[y])
      res = Math.max(res, max)
    })
  })

  return res
}
