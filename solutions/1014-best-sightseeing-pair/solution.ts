/**
 * 思路：时间复杂度 n ** 2 会超时，由于计算结果公式为 values[i] + i + values[j] - j
 * 因此找到最大的 values[i] + i 和最大的 values[j] - j 就可以了，固定 i 值遍历 j 值
 * （我怎么就想不到呢！！）
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function maxScoreSightseeingPair(values: number[]): number {
  let scoreI = 0
  let res = 0
  for (let i = 0; i < values.length; i++) {
    const scoreJ = values[i] - i
    const v = scoreI + scoreJ
    res = Math.max(res, v)
    scoreI = Math.max(scoreI, values[i] + i)
  }
  return res
}
