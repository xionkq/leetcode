/**
 * 思路：找到 Alice 超过 Bob所需要的最小得分，由于 Alice 按顺序过关，因此前缀和大于最小得分即可
 */

function minimumLevels(possible: number[]): number {
  const sum = possible.reduce((s, num) => {
    return s + (num === 0 ? -1 : 1)
  }, 0)
  const minScore = Math.floor(sum / 2) + 1
  let currentScore = 0
  let res = -1

  for (let i = 0; i < possible.length; i++) {
    const num = possible[i]
    currentScore += num === 0 ? -1 : 1
    if (currentScore >= minScore && i < possible.length - 1) {
      res = i + 1
      break
    }
  }

  return res
}
