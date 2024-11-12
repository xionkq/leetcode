/**
 * 思路：双重循环暴力解法
 * 时间复杂度：O(n ** 2)
 * 空间复杂度：O(1)
 */

function countKConstraintSubstrings(s: string, k: number): number {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let countZero = 0
    let countOne = 0
    for (let j = i; j < s.length; j++) {
      s[j] === '1' ? countOne++ : countZero++
      if (countZero <= k || countOne <= k) {
        res++
      } else {
        break
      }
    }
  }
  return res
}
