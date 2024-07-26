/**
 * 思路：考虑到可以被25整除数的特点，其最后两位一定为00、25、50、75，
 * 因此先找到最后一位，若找到0则找0和5，若找到5则找2和7，找到则得出结果
 * 未找到则需要删除原字符直到原字符为0
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function minimumOperations(num: string): number {
  let isHasZero = false
  let isHasFive = false
  const findNextForZero = [0, 5]
  const findNextForFive = [2, 7]
  const length = num.length

  for (let i = length - 1; i >= 0; i--) {
    const n = Number(num[i])
    if (isHasZero && findNextForZero.includes(n)) {
      return length - i - 2
    }
    if (isHasFive && findNextForFive.includes(n)) {
      return length - i - 2
    }
    if (n === 0) isHasZero = true
    if (n === 5) isHasFive = true
  }

  return isHasZero ? length - 1 : length
}
