/**
 * 思路：倒序遍历一次，使用 isNaN 来判断是否是数字字符
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function clearDigits(s: string): string {
  let numCount = 0
  const arr = s.split('')

  const isNumberChar = (char: string) => {
    return !Number.isNaN(Number(char))
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!isNumberChar(arr[i]) && numCount) {
      --numCount
      arr[i] = ''
    } else if (isNumberChar(arr[i])) {
      ++numCount
      arr[i] = ''
    }
  }

  return arr.join('')
}
