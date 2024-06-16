/**
 * 思路：若两字符串不相等，则其中最长的一个一定是最长特殊子序列；相等则是-1；时间复杂度为字符串比较时间
 * 时间复杂度：O(min(m, n))
 * 空间复杂度：O(1)
 */

function findLUSlength(a: string, b: string): number {
  return a === b ? -1 : Math.max(a.length, b.length)
};
