/**
 * 思路：不用考虑y轴，因此将所有点的x坐标排序后计算即可
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(n)
 */

function minRectanglesToCoverPoints(points: number[][], w: number): number {
  const pointX = points.map((item) => item[0])
  pointX.sort((a, b) => a - b)
  let res = 1
  let currentX = pointX[0] + w

  pointX.forEach((x) => {
    if (x > currentX) {
      currentX = x + w
      res++
    }
  })

  return res
}
