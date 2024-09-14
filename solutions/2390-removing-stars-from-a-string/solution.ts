/**
 * 思路：栈模拟秒了
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function removeStars(s: string): string {
  const stack = new Array<string>()
  for (const char of s) {
    if (char === '*') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}
