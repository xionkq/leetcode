/**
 * 思路：
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const sum = x
    .toFixed()
    .split('')
    .reduce((s, n) => {
      return s + Number(n)
    }, 0)

  return x % sum === 0 ? sum : -1
}
