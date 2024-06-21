/**
 * 思路：贪心算法，首先将数组按收益排序，然后取前k个值，考虑替换元素使得结果最大
 * 1. 若待选择元素与已选择元素类别一致，则结果会由于收益的减小而减小，因此不能选择
 * 2. 若待选择元素与已选择元素类别不一致，若替换掉唯一的类别元素，则结果会由于收益的减小而减小，因此不能选择
 * 3. 若待选择元素与已选择元素类别不一致，若替换掉非唯一的类别元素，结果有可能会增加，因此应该选择
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(n)
 */

function findMaximumElegance(items: number[][], k: number): number {
  const sortedArr = items.sort((a, b) => b[0] - a[0])

  const selected = sortedArr.slice(0, k)
  const candidate = sortedArr.slice(k)

  const cSet = new Set<number>()
  let totalProfit = 0
  const replace = Array<number>()
  let result = 0

  selected.forEach((item) => {
    const [p, c] = item
    if (cSet.has(c)) {
      replace.push(p)
    } else {
      cSet.add(c)
    }
    totalProfit += p
  })

  result = totalProfit + cSet.size ** 2

  for (const item of candidate) {
    const [p, c] = item
    if (cSet.has(c)) {
      continue
    }
    if (!replace.length) {
      break
    }

    const minP = replace[replace.length - 1]
    const newRes = totalProfit - minP + p + (cSet.size + 1) ** 2

    result = Math.max(newRes, result)
    cSet.add(c)
    totalProfit = totalProfit - minP + p
    replace.pop()
  }

  return result
}
