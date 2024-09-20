/**
 * 思路：数位 dp，像是之前做过的 dfs + 记忆化搜索的题
 * 时间复杂度：O(log n * 4096 * 4)，每个状态有 10 种可能的选择
 * 空间复杂度：O(log n * 4096)，状态总数：len * 1024 * 2 * 2
 */

function countSpecialNumbers(n: number): number {
  const s = n.toString()
  const len = s.length
  const memory = new Array(len)
    .fill(undefined)
    .map(() => new Array(1 << 10).fill(undefined).map(() => new Array(4).fill(-1)))
  const dfs = (index: number, mask: number, isLimit: boolean, isNum: boolean): number => {
    if (index === len) {
      return isNum ? 1 : 0
    }
    const x = (Number(isLimit) << 1) | Number(isNum)
    if (!isLimit && isNum && memory[index][mask][x] !== -1) {
      return memory[index][mask][x]
    }
    let res = 0
    if (!isNum) {
      res += dfs(index + 1, mask, false, false)
    }
    const max = isLimit ? Number(s[index]) : 9
    const min = isNum ? 0 : 1
    for (let i = min; i <= max; i++) {
      if (((mask >> i) & 1) === 0) {
        // 仅当前位值受限制，且已经是最大值，则下一位置值需要受限制
        res += dfs(index + 1, mask | (1 << i), isLimit && i === max, true)
      }
    }
    memory[index][mask][x] = res
    return res
  }

  return dfs(0, 0, true, false)
}
