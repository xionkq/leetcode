/**
 * 思路：算是找规律，黑色位置处横纵坐标奇偶性一定相同，白色位置处一定不同
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  const [x1, y1] = coordinate1
  const [x2, y2] = coordinate2
  const sum1 = x1.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + Number(y1)
  const sum2 = x2.charCodeAt(0) - 'a'.charCodeAt(0) + 1 + Number(y2)
  return (sum1 + sum2) % 2 === 0
}
