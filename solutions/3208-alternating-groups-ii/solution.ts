/**
 * 思路：固定长度的滑动窗口，记录窗口内相同相邻块的个数，个数为 0 则满足结果条件
 * 时间复杂度：O(n + k)
 * 空间复杂度：O(1)
 */

function numberOfAlternatingGroups(colors: number[], k: number): number {
  const loop = colors.concat(colors.slice(0, k - 1))
  let left = 0
  let right = 1
  let sameCount = 0
  let res = 0

  while (right < k) {
    loop[right] === loop[right - 1] && sameCount++
    right++
  }
  sameCount === 0 && res++

  while (right < loop.length) {
    loop[right] === loop[right - 1] && sameCount++
    right++
    loop[left] === loop[left + 1] && sameCount--
    left++
    sameCount === 0 && res++
  }

  return res
}
