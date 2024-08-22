/**
 * 思路：纯字符串解法（因为不会位运算）
 * 1. 需要注意到的是，& 操作同为 1 结果才为 1，因此数组第一个元素一定为 x
 * 2. 数组后续递增元素只能是在二进制 x 的 '0' 处补 '1'
 * 时间复杂度：O(log x + log n)
 * 空间复杂度：O(log x + log n)
 */

function minEnd(n: number, x: number): number {
  if (n === 1) {
    return x
  }
  const binaryN = (n - 1).toString(2)
  const binaryX = x.toString(2)
  let res = binaryX.split('')
  let rest = binaryN.split('')

  for (let i = binaryX.length - 1; i >= 0; i--) {
    if (!rest.length) {
      break
    }
    if (binaryX[i] === '0') {
      res[i] = rest.pop()!
    }
  }

  return parseInt(rest.join('') + res.join(''), 2)
}
