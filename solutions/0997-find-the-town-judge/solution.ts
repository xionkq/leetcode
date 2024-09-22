/**
 * 思路：通过求所有居民信任人的交集，判断交集得出结果
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function findJudge(n: number, trust: number[][]): number {
  if (!trust.length) {
    return n === 1 ? 1 : -1
  }
  const map = new Map<number, Set<number>>()
  for (const t of trust) {
    if (!map.has(t[0])) {
      map.set(t[0], new Set())
    }
    map.set(t[0], map.get(t[0])!.add(t[1]))
  }
  if (Array.from(map.keys()).length !== n - 1) {
    return -1
  }

  let res: Set<number> | null = null
  for (const [key, value] of map) {
    if (!res) {
      res = value
    } else if (!res.size) {
      return -1
    } else {
      const temp = new Set<number>()
      res.forEach((num) => {
        value.has(num) && temp.add(num)
      })
      res = temp
    }
  }

  if (!res || !res.size || res.size > 1) {
    return -1
  }

  return Array.from(res)[0]
}
