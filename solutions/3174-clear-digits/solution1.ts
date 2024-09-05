/**
 * 思路：模拟栈，通过判断字符编码判断是否为数字字符
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function clearDigits(s: string): string {
  const stack = new Array<string>()
  const max = '9'.charCodeAt(0)
  const min = '0'.charCodeAt(0)

  const isNumberChar = (char: string) => {
    const code = char.charCodeAt(0)
    return code >= min && code <= max
  }

  for (let i = 0; i < s.length; i++) {
    if (isNumberChar(s[i])) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return stack.join('')
}
