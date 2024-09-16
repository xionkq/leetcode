/**
 * 思路：遍历，注意 end 比 start 小的情况
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  const n = distance.length
  const area = destination - start > 0 ? destination - start : destination - start + n
  let total = 0
  let len = 0

  for (let i = 0; i < n; i++) {
    const index = (start + i) % n
    total += distance[index]
    i < area && (len += distance[index])
  }

  return Math.min(len, total - len)
}
