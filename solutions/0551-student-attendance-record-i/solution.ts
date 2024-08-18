/**
 * 思路：一次遍历，也可以尝试正则
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function checkRecord(s: string): boolean {
  let countsA = 0
  let countsL = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      countsA++
    }
    if (s[i] === 'L') {
      countsL++
    } else {
      countsL = 0
    }

    if (countsA === 2 || countsL === 3) {
      return false
    }
  }

  return true
}
