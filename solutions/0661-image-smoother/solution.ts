/**
 * 思路：暴力遍历，遍历每个点，找出其相邻八个点的值求平均，代码属实不太优雅
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(1)
 */

function imageSmoother(img: number[][]): number[][] {
  const m = img.length
  const n = img[0].length
  const res: number[][] = new Array(m).fill(undefined).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = compute(i, j)
    }
  }

  function compute(i: number, j: number) {
    let sum = 0
    let count = 0
    if (i - 1 >= 0) {
      img[i - 1][j] !== undefined && add(img[i - 1][j])
      img[i - 1][j - 1] !== undefined && add(img[i - 1][j - 1])
      img[i - 1][j + 1] !== undefined && add(img[i - 1][j + 1])
    }
    if (i + 1 < m) {
      img[i + 1][j] !== undefined && add(img[i + 1][j])
      img[i + 1][j - 1] !== undefined && add(img[i + 1][j - 1])
      img[i + 1][j + 1] !== undefined && add(img[i + 1][j + 1])
    }
    img[i][j] !== undefined && add(img[i][j])
    img[i][j - 1] !== undefined && add(img[i][j - 1])
    img[i][j + 1] !== undefined && add(img[i][j + 1])

    function add(v: number) {
      sum += v
      count++
    }

    return Math.floor(sum / count)
  }

  return res
}
