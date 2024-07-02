/**
 * 思路：100以内质数的特点为，不能是1，不能是2357，不能是2357的倍数
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function maximumPrimeDifference(nums: number[]): number {
  const isPrime = (num: number) => {
    if (num === 1) {
      return false
    }
    if (num === 2 || num === 3 || num === 5 || num === 7) {
      return true
    }
    return num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0
  }
  const first = nums.findIndex((num) => isPrime(num))
  const last = nums.findLastIndex((num) => isPrime(num))

  return Math.abs(last - first)
}
