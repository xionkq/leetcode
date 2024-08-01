/**
 * 思路：将cards数组排序，去除前cnt个元素，即为最大结果值
 * 若结果值是偶数，则直接返回
 * 若结果值是奇数，则找到前cnt个数据里最小的偶数，替换为剩下元素中最大的奇数
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function maxmiumScore(cards: number[], cnt: number): number {
  cards.sort((a, b) => b - a)
  const res = cards.slice(0, cnt).reduce((s, item) => s + item, 0)

  if (res % 2 === 0) {
    return res
  } else {
    const minEven = cards.slice(0, cnt).findLast((item) => item % 2 === 0)
    const maxAdd = cards.slice(cnt).find((item) => item % 2 === 1)
    return minEven && maxAdd ? res - minEven + maxAdd : 0
  }
}
