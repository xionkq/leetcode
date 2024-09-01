/**
 * 思路：最简单的一集
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  let res = 0
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      res++
    }
  }
  return res
}
