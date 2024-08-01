/**
 * 思路：将cards数组排序，分离出奇数数组和偶数数组，循环cnt次，每次从拿奇偶数组中最大的一个元素
 * 直到拿到剩最后2个元素，此时分类讨论，判断最终结果是否满足要求，并返回最大的结果
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(n)
 */

function maxmiumScore(cards: number[], cnt: number): number {
  cards.sort((a, b) => b - a)
  const odds = cards.filter((item) => item % 2 === 1)
  const evens = cards.filter((item) => item % 2 === 0)

  if (cnt === 1) {
    return evens[0] || 0
  }

  if (cnt === cards.length) {
    const sum = cards.reduce((s, item) => s + item)
    return sum % 2 === 1 ? 0 : sum
  }

  let res = 0
  let oddsIndex = 0
  let evensIndex = 0

  const isOdd = (num: number) => {
    return num % 2 === 1
  }

  while (cnt > 0) {
    if (cnt === 2) {
      if (isOdd(res)) {
        if (oddsIndex >= odds.length) {
          return odds.length
            ? res - odds[odds.length - 1] + evens[evensIndex] + evens[evensIndex + 1] + evens[evensIndex + 2]
            : 0
        }
        if (evensIndex >= evens.length) {
          return evens.length
            ? res - evens[evens.length - 1] + odds[oddsIndex] + odds[oddsIndex + 1] + odds[oddsIndex + 2]
            : 0
        }
        return res + odds[oddsIndex] + evens[evensIndex]
      } else {
        if (oddsIndex > odds.length - 2) {
          return res + evens[evensIndex] + evens[evensIndex + 1]
        }
        if (evensIndex > evens.length - 2) {
          return res + odds[oddsIndex] + odds[oddsIndex + 1]
        }
        return res + Math.max(odds[oddsIndex] + odds[oddsIndex + 1], evens[evensIndex] + evens[evensIndex + 1])
      }
    }
    const max = Math.max(odds[oddsIndex] || 0, evens[evensIndex] || 0)
    max === odds[oddsIndex] ? oddsIndex++ : evensIndex++
    res += max
    cnt--
  }

  return res
}
