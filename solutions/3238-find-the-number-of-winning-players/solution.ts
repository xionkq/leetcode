/**
 * 思路：其实可以先统计完小球数量，然后再去判断符合要求的玩家数量，减少复杂度而且无需 Set 去重
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function winningPlayerCount(n: number, pick: number[][]): number {
  const arr: number[][] = new Array(n).fill(undefined).map(() => new Array(0))
  const set = new Set<number>()
  for (let i = 0; i < pick.length; i++) {
    const [playerIndex, ballColor] = pick[i]
    arr[playerIndex][ballColor] = (arr[playerIndex][ballColor] || 0) + 1
    if (arr[playerIndex][ballColor] > playerIndex && !set.has(playerIndex)) {
      set.add(playerIndex)
    }
  }
  return set.size
}
