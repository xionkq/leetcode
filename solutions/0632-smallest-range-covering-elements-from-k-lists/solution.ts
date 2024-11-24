/**
 * 思路：滑动窗口解法，我这猪脑子是真写不出来
 * 时间复杂度：O(n * k)，n 为 nums 中子数字的平均长度
 * 空间复杂度：O(n * k)
 */

function smallestRange(nums: number[][]): number[] {
  const size = nums.length
  const includeMap = new Map<number, number[]>()
  let xMin = Number.MAX_SAFE_INTEGER
  let xMax = Number.MIN_SAFE_INTEGER

  // 将数组中所有元素的出现情况计入 map 中
  for (let i = 0; i < size; i++) {
    for (const x of nums[i]) {
      if (!includeMap.has(x)) {
        includeMap.set(x, [])
      }
      includeMap.get(x)!.push(i)
      xMin = Math.min(x, xMin)
      xMax = Math.max(x, xMax)
    }
  }

  // 表示 nums 中第 index 个数组中元素，在区间 [left，right] 中出现的次数
  const freq = new Array<number>(size).fill(0)
  let includes = 0
  let left = xMin,
    right = xMin - 1
  let bestLeft = xMin,
    bestRight = xMax

  while (right < xMin) {
    right++
    if (!includeMap.has(right)) {
      continue
    }
    for (const x of includeMap.get(right)!) {
      freq[x]++
      if (freq[x] === 1) {
        includes++
      }
    }
    // 当区间 [left，right] 包含每个数组中元素时，找出最优区间
    while (includes === size) {
      if (right - left < bestRight - bestLeft) {
        ;[bestLeft, bestRight] = [left, right]
      }
      // left 左移，并将计算过的次数减去
      if (includeMap.has(left)) {
        for (const x of includeMap.get(left)!) {
          freq[x]--
          if (freq[x] === 0) {
            includes--
          }
        }
      }
      left++
    }
  }

  return [bestLeft, bestRight]
}
