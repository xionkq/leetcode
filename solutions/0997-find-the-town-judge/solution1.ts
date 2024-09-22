/**
 * 思路：通过有向图的入度和出度判断
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function findJudge(n: number, trust: number[][]): number {
  const inArr = new Array(n + 1).fill(0)
  const outArr = new Array(n + 1).fill(0)
  for (let i = 0; i < trust.length; i++) {
    outArr[trust[i][0]]++
    inArr[trust[i][1]]++
  }
  for (let j = 1; j < inArr.length; j++) {
    // 满足入度为 n - 1，出度为 0，如果满足条件，则这样的结果只可能有 1 个
    if (inArr[j] === n - 1 && outArr[j] === 0) {
      return j
    }
  }
  return -1
}
