/**
 * 思路：二维前缀和，边界情况处理恶心得不行，虽然结果通过但代码可读性差
 * 根据题解更新了一版，sum[i][j] 代表 img[i - 1][j - 1] 作为顶点的前缀和，这样就少一步判断边界
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m * n)
 */

function imageSmoother(img: number[][]): number[][] {
  const m = img.length
  const n = img[0].length
  const sum: number[][] = new Array(m + 1).fill(undefined).map(() => new Array(n + 1).fill(0))
  const res: number[][] = new Array(m).fill(undefined).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + img[i][j]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const top = Math.max(i - 1, 0)
      const bottom = Math.min(i + 2, m)
      const left = Math.max(j - 1, 0)
      const right = Math.min(j + 2, n)
      const sumNum = sum[bottom][right] - sum[top][right] - sum[bottom][left] + sum[top][left]
      const countNum = (bottom - top) * (right - left)
      res[i][j] = Math.floor(sumNum / countNum)
    }
  }

  return res
}
