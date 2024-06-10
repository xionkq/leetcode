/**
 * 思路：遍历数组，符合要求的值被分配进新数组
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const result = [] as number[]
  arr.forEach((item, i) => {
    if (fn(item, i)) result.push(item)
  })
  return result
}
