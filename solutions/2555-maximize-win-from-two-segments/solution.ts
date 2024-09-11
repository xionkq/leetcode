/**
 * 思路：滑动窗口两次，需要固定左滑动窗口，然后遍历右侧枚举找第二个窗口
 * 坑：不能通过滑动窗口找到第一段最优解然后删除，在剩余部分找到第二段最优解，考虑这种 case：[1, 2, 2, 3, 3, ,4]，k = 1
 * 时间复杂度：O(n ** 2)
 * 空间复杂度：O(1)
 */

function maximizeWin(prizePositions: number[], k: number): number {
  let res = 0
  let left = 0
  let right = 0
  let second
  while (right < prizePositions.length) {
    while (right < prizePositions.length && prizePositions[right] <= prizePositions[left] + k) {
      right++
    }
    if (!second || right > second.l) {
      second = findMax(right, prizePositions.length, prizePositions, k)
    }
    res = Math.max(res, right - left + second.max)
    left++
  }

  return res
}

const findMax = (start: number, end: number, nums: number[], k: number) => {
  let max = 0,
    l = 0
  let left = start
  let right = start
  while (right < end) {
    while (right < end && nums[right] <= nums[left] + k) {
      right++
    }
    const len = right - left
    if (len > max) {
      max = len
      l = left
    }
    left++
  }

  return { max, l }
}
