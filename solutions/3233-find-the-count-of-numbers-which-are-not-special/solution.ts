/**
 * 思路：其实根据题意，看出特殊数字一定能开方，且开方后的数字一定为质数，但是求 30000 以内的质数不会求
 * 使用埃氏筛，从小到达选择一个质数，将其倍数全部标记为非质数
 * 时间复杂度：O(n * log log n)
 * 空间复杂度：O(n)
 */

function nonSpecialCount(l: number, r: number): number {
  let res = r - l + 1
  const n = Math.floor(Math.sqrt(r))
  const arr: number[] = new Array(n + 1).fill(0)
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 1) {
      continue
    }
    if (i ** 2 >= l && i ** 2 <= r) {
      res--
    }
    // 把所有 i 的倍数标记为非质数，不会标记质数 i 本身
    for (let j = i + i; j <= n; j += i) {
      arr[j] = 1
    }
  }

  return res
}
