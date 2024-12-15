/**
 * 思路：找出所有数字出现的次数，根据次数排序计算
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(n)
 */

function minSetSize(arr: number[]): number {
  const map = new Map<number, number>()
  let res = 0
  let totalCount = 0
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
  }
  const sortedCountArr = Array.from(map.values()).sort((a, b) => b - a)
  for (let i = 0; i < sortedCountArr.length; i++) {
    res++
    totalCount += sortedCountArr[i]
    if (totalCount >= arr.length / 2) {
      break
    }
  }
  return res
}
