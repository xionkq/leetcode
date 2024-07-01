/**
 * 思路：暴力遍历，创建一个二维数组用于存放所有节点的相邻节点，回溯遍历所有节点
 * 坑：千万千万不要使用对象初始数组arr.fill([])，会导致所有元素被关联
 * 时间复杂度：O(4 ^ 10)，每次回溯递归最多有4个分支，递归长度最长为10
 * 空间复杂度：O(2m + n + 10)，m为edges长度，n为节点数，10为递归最大深度
 */

function maximalPathQuality(values: number[], edges: number[][], maxTime: number): number {
  const n = values.length
  let res = 0
  const visited = new Array(n).fill(0)
  const graph: [number, number][][] = new Array(n).fill(null).map(() => [])

  for (const [u, v, time] of edges) {
    graph[u].push([v, time])
    graph[v].push([u, time])
  }

  const dfs = (node: number, currentTime: number, currentValue: number) => {
    if (currentTime > maxTime) {
      return
    }
    if (node === 0) {
      res = Math.max(res, currentValue)
    }
    for (const [n, t] of graph[node]) {
      if (visited[n] === 0) {
        currentValue += values[n]
      }
      visited[n]++
      dfs(n, currentTime + t, currentValue)
      visited[n]--
      if (visited[n] === 0) {
        currentValue -= values[n]
      }
    }
  }

  visited[0]++
  dfs(0, 0, values[0])

  return res
}
