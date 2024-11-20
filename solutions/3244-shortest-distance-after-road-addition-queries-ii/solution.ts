/**
 * 思路：由于题意告知不会出现相交的道路，所以最短路径只有一条
 * 每次新增道路查询时都只需判断上一次的最短路径是否会变短即可
 * 时间复杂度：O(n + q) 一层循环最多迭代 q 次，二层 while 最多迭代 n 次
 * 空间复杂度：O(n)
 */

function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const road: number[] = new Array(n - 1).fill(0).map((_, i) => i + 1)
  let distance = n - 1
  const res: number[] = []

  for (let i = 0; i < queries.length; i++) {
    const [node, newNext] = queries[i]
    let oldNext = road[node]
    road[node] = newNext
    while (oldNext !== -1 && oldNext < newNext) {
      distance--
      const next = road[oldNext]
      road[oldNext] = -1
      oldNext = next
    }
    res.push(distance)
  }

  return res
}
