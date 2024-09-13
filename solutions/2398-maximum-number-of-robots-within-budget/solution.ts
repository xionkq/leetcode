/**
 * 思路：题目有一些误导，本质上是一个滑动窗口 + 单调队列问题
 * 主要是在于学会使用单调队列，维护滑动窗口中的最大值，降低整体复杂度
 * （使用直接找最大值，和稀疏数组找最大值复杂度都高了，单调队列在其中仅需要常数时间复杂度）
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function maximumRobots(chargeTimes: number[], runningCosts: number[], budget: number): number {
  const n = chargeTimes.length
  let res = 0
  let left = 0
  let right = 0
  let sum = 0
  const queue = new Array<number>()
  while (left < n && right <= n) {
    while (!queue.length || sum * (right - left) + chargeTimes[queue[0]] <= budget) {
      res = Math.max(res, right - left)
      sum += runningCosts[right]
      add(right)
      right++
    }
    sum -= runningCosts[left]
    remove(left)
    left++
  }

  function add(index: number) {
    while (queue.length && chargeTimes[queue[queue.length - 1]] < chargeTimes[index]) {
      queue.pop()
    }
    queue.push(index)
  }

  function remove(left: number) {
    if (queue.length && queue[0] <= left) {
      queue.shift()
    }
  }

  return res
}
