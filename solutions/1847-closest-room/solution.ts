/**
 * 思路：
 * 1. 根据房间大小给房间排序
 * 2. 二分查找满足 query 最小房间大小的位置
 * 3. 遍历该位置右侧的所有房间，找到 id 与 query 中最接近的值
 * 时间复杂度：O(n * log n + n * q)
 * 空间复杂度：O(log n)
 */

function closestRoom(rooms: number[][], queries: number[][]): number[] {
  rooms.sort((a, b) => a[1] - b[1])
  const res = new Array<number>()
  for (let i = 0; i < queries.length; i++) {
    const [preferred, minSize] = queries[i]
    let left = 0
    let right = rooms.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      rooms[mid][1] >= minSize ? (right = mid) : (left = mid + 1)
    }
    let min = Number.MAX_SAFE_INTEGER
    let minId = -1
    for (let j = left; j < rooms.length; j++) {
      const diff = Math.abs(rooms[j][0] - preferred)
      if (diff < min) {
        min = diff
        minId = rooms[j][0]
      }
      diff === min && (minId = Math.min(minId, rooms[j][0]))
    }
    res.push(minId)
  }
  return res
}
