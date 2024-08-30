/**
 * 思路：分别统计每一个数位上差值的和，然后累加所有数位
 * 时间复杂度：O(m * n)
 * 空间复杂度：O(m) m 为数位长度，n 为数组长度
 */

function sumDigitDifferences(nums: number[]): number {
  let res = 0
  const arr = new Array(nums[0].toFixed().length).fill(0).map(() => new Array(10).fill(0)) as number[][]
  nums.forEach((num) => {
    const str = num.toFixed()
    for (let i = 0; i < str.length; i++) {
      arr[i][Number(str[i])]++
    }
  })
  arr.forEach((item) => {
    let total = 0
    for (let i = 0; i < item.length - 1; i++) {
      total += item[i]
      res += total * item[i + 1]
    }
  })

  return res
}
