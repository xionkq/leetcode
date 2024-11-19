/**
 * 思路：把 dfs 换成 bfs 超时用例执行时间从 3000ms 到 6ms
 * 主要是 dfs 会把每种路径都遍历一遍，而 bfs 每个节点只会遍历一次
 * （只计算最初到达节点的值，后续一定会比最初的值大）
 * 时间复杂度：O(q * (n + q)) 广度优先搜索时间复杂度为 n + q
 * 空间复杂度：O(n + q)
 */

function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  const nextArr: number[][] = new Array(n).fill(undefined).map((v, i) => [i + 1])
  const answer: number[] = []

  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i]
    nextArr[a].push(b)
    answer[i] = bfs()
  }

  function bfs() {
    const distance = new Array<number>(n).fill(0)
    const queue = [0]
    while (queue.length) {
      const node = queue[0]
      const nextNodes = nextArr[node]
      nextNodes.forEach((nextNode) => {
        // 如果这个节点已经存在一条路径，后续就不会存他，因为路径值一定会更大
        if (distance[nextNode] === 0) {
          queue.push(nextNode)
          distance[nextNode] = distance[node] + 1
        }
      })
      queue.shift()
    }
    return distance[n - 1]
  }

  return answer
}
