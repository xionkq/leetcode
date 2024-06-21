/**
 * 思路：由于数组A和B长度相同，因此可以一次遍历两个数组，判断其趋势是否相同
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function temperatureTrend(temperatureA: number[], temperatureB: number[]): number {
  let res = 0
  let current = 0

  const isSame = (i: number) => {
    return (
      (temperatureA[i + 1] === temperatureA[i] && temperatureB[i + 1] === temperatureB[i]) ||
      (temperatureA[i + 1] > temperatureA[i] && temperatureB[i + 1] > temperatureB[i]) ||
      (temperatureA[i + 1] < temperatureA[i] && temperatureB[i + 1] < temperatureB[i])
    )
  }

  for (let i = 0; i < temperatureA.length - 1; i++) {
    if (isSame(i)) {
      current++
      res = Math.max(res, current)
    } else {
      current = 0
    }
  }

  return res
}
