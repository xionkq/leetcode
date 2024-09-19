/**
 * 思路：第一反应是滑动窗口，但其实一次遍历就可以
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function longestContinuousSubstring(s: string): number {
  let len = 1
  let res = 0
  let last = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i].charCodeAt(0) === last.charCodeAt(0) + 1) {
      len++
      last = s[i]
    } else {
      res = Math.max(res, len)
      len = 1
      last = s[i]
    }
  }
  return Math.max(res, len)
}
