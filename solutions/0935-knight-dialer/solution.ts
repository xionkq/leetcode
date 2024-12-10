/**
 * 思路：先预处理数组，声明每个点可到达的下一个点位置，然后递归求解，注意使用记忆化搜索降低复杂度
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function knightDialer(n: number): number {
  const mod = 10 ** 9 + 7
  const nextArr: number[][] = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
  const store: number[][] = new Array(nextArr.length).fill(undefined).map(() => new Array(n + 1).fill(-1))
  let res = 0

  nextArr.forEach((item, index) => {
    res += getCounts(index, n)
  })

  return res % mod

  function getCounts(num: number, len: number) {
    if (len === 1) {
      return 1
    }
    if (store[num][len] !== -1) {
      return store[num][len]
    }
    let counts = 0
    for (const next of nextArr[num]) {
      counts += getCounts(next, len - 1)
    }
    store[num][len] = counts % mod
    return counts % mod
  }
}
