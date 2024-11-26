/**
 * 思路：遍历一次
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function numberOfAlternatingGroups(colors: number[]): number {
  let res = 0
  for (let i = 0; i < colors.length; i++) {
    let leftIndex = i - 1
    let rightIndex = i + 1
    if (i === 0) {
      leftIndex = colors.length - 1
    }
    if (i === colors.length - 1) {
      rightIndex = 0
    }
    colors[i] !== colors[leftIndex] && colors[i] !== colors[rightIndex] && res++
  }
  return res
}
