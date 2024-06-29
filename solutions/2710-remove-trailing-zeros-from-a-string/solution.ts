/**
 * 思路：略
 * 时间复杂度：O(n)
 * 空间复杂度：O(n) substring()会创建一个新字符
 */

function removeTrailingZeros(num: string): string {
  while (num[num.length - 1] === '0') {
    num = num.substring(0, num.length - 1)
  }
  return num
}

/**
 * 思路：略
 * 时间复杂度：O(n)
 * 空间复杂度：O(1) 输出不算
 */

function removeTrailingZeros(num: string): string {
  let len = num.length
  while (num[len - 1] === '0') {
    len--
  }
  return num.substring(0, len)
}
