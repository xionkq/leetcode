/**
 * 思路：由题意可知结果和顺序无关，因此可排序。
 * 1. 根据条件，遍历 x，求出 y 的范围
 * 2. 此范围即是计入结果的范围，但是要减一减去自身
 * 3. （看了题解，由于 x 递增，则 y 一定是递增的，因此用双指针比二分更好）
 * 时间复杂度：O(n * log n)
 * 空间复杂度：O(log n)
 */

function numFriendRequests(ages: number[]): number {
  // y 的范围：
  // ages[y] > 0.5 * ages[x] + 7
  // ages[y] <= ages[x]
  // ages[y] <= 100 || ages[x] >= 100
  let res = 0
  ages.sort((a, b) => a - b)

  for (let i = 0; i < ages.length; i++) {
    if (0.5 * ages[i] + 7 >= ages[i]) {
      continue
    }
    const l = findIndex(0, i, 0.5 * ages[i] + 7)
    const r = findIndex(i + 1, ages.length, ages[i])
    // 这个区间值一定包含自身，需要减一以减去自身
    res += r - l - 1
  }

  function findIndex(left: number, right: number, target: number): number {
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left
      if (ages[mid] <= target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }

  return res
}
