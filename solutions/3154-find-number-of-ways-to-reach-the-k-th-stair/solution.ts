/**
 * 思路：题目读完立马 dfs + 记忆化搜索，超时剪枝超时超时超时。。过不了
 * 时间复杂度：O(k ** 2)
 * 空间复杂度：O(k ** 2)
 */

function waysToReachStair(k: number): number {
  const store = new Array(k + 2).fill(0).map(() => new Array(k + 2).fill(0).map(() => new Array(2).fill(-1)))
  const dfs = (i: number, jump: number, isBack: number): number => {
    if (i > k + 1) {
      return 0
    }
    if (store[i][jump][isBack] !== -1) {
      return store[i][jump][isBack]
    }

    let res = 0
    if (i === k) {
      res++
    }
    res += dfs(i + 2 ** jump, jump + 1, 0)
    if (isBack === 0 && i > 0) {
      res += dfs(i - 1, jump, 1)
    }
    store[i][jump][isBack] = res
    return res
  }

  return dfs(1, 0, 0)
}

/**
 * 思路：答案思路，使用位运算计算的 key 值，复杂度降低很多，不是很明白其实
 * 时间复杂度：O(log k)
 * 空间复杂度：O(log k)
 */
function waysToReachStair(k: number): number {
  const store: Map<bigint, number> = new Map()
  const dfs = (i: number, jump: number, isBack: number): number => {
    if (i > k + 1) {
      return 0
    }
    const key: bigint = (BigInt(i) << BigInt(32)) | BigInt(jump << 1) | BigInt(isBack)
    if (store.has(key)) {
      return store.get(key)!
    }

    let res = 0
    if (i === k) {
      res++
    }
    res += dfs(i + 2 ** jump, jump + 1, 0)
    if (isBack === 0 && i > 0) {
      res += dfs(i - 1, jump, 1)
    }
    store.set(key, res)
    return res
  }

  return dfs(1, 0, 0)
}
