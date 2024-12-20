/**
 * 思路：暴力枚举，不过想到一个优化方向是统计字符串 s 所有字符出现次数，因数遍历从最小出现次数开始
 * 时间复杂度：O(n * T)，T 为因数数目
 * 空间复杂度：O(26)
 */

function minAnagramLength(s: string): number {
  let n = s.length
  for (let i = 1; i < n; i++) {
    if (n % i !== 0) {
      continue
    }
    if (check(s, i)) {
      return i
    }
  }
  return n
}

function check(s: string, m: number): boolean {
  let count = new Array<number>(26).fill(0)
  for (let j = 0; j < s.length; j += m) {
    let current = new Array<number>(26).fill(0)
    for (let k = j; k < j + m; k++) {
      current[s.charCodeAt(k) - 'a'.charCodeAt(0)]++
    }
    if (j > 0 && !count.every((value, index) => value === current[index])) {
      return false
    }
    count = [...current]
  }
  return true
}
