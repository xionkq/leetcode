/**
 * 思路：略
 * 时间复杂度：O(n)，因为俩字符串长度一样，因此时间复杂度为 2n
 * 空间复杂度：O(n)
 */

function findPermutationDifference(s: string, t: string): number {
  const map = new Map<string, number>()
  let res = 0
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  for (let j = 0; j < t.length; j++) {
    const i = map.get(t[j])!
    res += Math.abs(j - i)
  }
  return res
}
