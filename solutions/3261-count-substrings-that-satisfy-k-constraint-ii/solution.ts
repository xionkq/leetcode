/**
 * 思路：一天天整这么难的题
 * 时间复杂度：O(n + q)
 * 空间复杂度：O(n)
 */

function countKConstraintSubstrings(s: string, k: number, queries: number[][]): number[] {
  const n = s.length
  const count = [0, 0]
  const right = Array(n).fill(n)
  // 前缀和，prefix[i] 表示以 0...i 结尾的所有满足约束条件字串的数量
  const prefix = Array(n + 1).fill(0)
  let i = 0
  for (let j = 0; j < n; ++j) {
    count[parseInt(s[j], 10)]++
    while (count[0] > k && count[1] > k) {
      count[parseInt(s[i], 10)]--
      right[i] = j
      i++
    }
    prefix[j + 1] = prefix[j] + j - i + 1
  }

  const res = []
  for (const query of queries) {
    const l = query[0],
      r = query[1]
    // 这一步中的 i，意味着以 i 结尾的满足条件字串的左边界，一定在区间 [l, i] 中
    // 而以 l...i 结尾的满足条件的字串，不一定在区间 [l, i] 中
    // 因此 [l, r] 区间的所有字串中，以 i...r 结尾的满足条件的字串一定在区间中，因此可以通过 prefix 求出
    // [l, r] 区间的所有字串中，l...i 区间所有字串是一定满足条件的，可以通过数学算出
    const i = Math.min(right[l], r + 1)
    const part1 = Math.floor(((i - l + 1) * (i - l)) / 2)
    const part2 = prefix[r + 1] - prefix[i]
    res.push(part1 + part2)
  }
  return res
}
