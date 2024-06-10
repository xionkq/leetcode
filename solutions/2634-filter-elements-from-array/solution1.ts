/**
 * 思路：原地操作，空间复杂度降低
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  let index = 0
  arr.forEach((item, i) => {
    if (fn(item, i)) {
      arr[index] = item
      index++
    }
  })
  arr = arr.slice(0, index)
  return arr
}
