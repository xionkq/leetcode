/**
 * 思路：好好好，会 dfs + 记忆化搜索了，剪枝剪枝剪枝
 * 1. 测试用例：超时 （原版）
 * 2. 测试用例：1561 ms （使用连续 L 出现次数，而非最近三个字符作为 dfs 第三个参数）
 * 3. 测试用例：1154 ms （使用数组作为缓存而不是 map）
 * 4. 测试用例：676 ms （忘记删除 key 了，应该是构造 map 的 key 时用时过多）
 * 时间复杂度：O(n)，记忆化搜索最大状态为 n * 2 * 3，最多计算这么多次
 * 空间复杂度：O(n)，记忆化搜索最大使用空间为 n * 2 * 3
 */

function checkRecord(n: number): number {
  const store = new Array(n + 1).fill(0).map(() => new Array(2).fill(0).map(() => new Array(3).fill(0)))
  const dfs = (rest: number, countA: number, countL: number): number => {
    if (countA === 2 || countL === 3) {
      return 0
    }
    if (rest === 0) {
      return 1
    }

    if (store[rest][countA][countL] !== 0) {
      return store[rest][countA][countL]
    }

    const res1 = dfs(rest - 1, countA + 1, 0)
    const res2 = dfs(rest - 1, countA, countL + 1)
    const res3 = dfs(rest - 1, countA, 0)
    const res = (res1 + res2 + res3) % (10 ** 9 + 7)
    store[rest][countA][countL] = res
    return res
  }

  return dfs(n, 0, 0)
}
