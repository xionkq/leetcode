/**
 * 思路：判断横纵坐标奇偶性是否相同即可
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

function squareIsWhite(coordinates: string): boolean {
  const [x, y] = coordinates
  const isXOdd = (x.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % 2
  const isYOdd = Number(y) % 2
  return isXOdd !== isYOdd
}
