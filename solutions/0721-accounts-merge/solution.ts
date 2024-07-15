/**
 * 没写出来，记录一下。并查集主要处理一些不相交集合的合并和查询操作，Union把不相交的集合合并，Find查询元素属于哪个集合。
 *
 * 思路：
 * 1. 创建并查集，并记录每个邮箱对应的用户名
 * 2. 遍历每个用户，将每个用户的邮箱加入并查集中，并合并相邻的邮箱
 * 3. 遍历并查集，将每个根节点对应的邮箱集合转换为数组，并排序
 * 4. 返回合并后的用户列表
 */

class UnionFind {
  parent: Map<string, string>
  rank: Map<string, number>

  constructor() {
    this.parent = new Map()
    this.rank = new Map()
  }

  find(x: string): string {
    if (!this.parent.has(x)) {
      this.parent.set(x, x)
      this.rank.set(x, 1)
    }
    if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)!))
    }
    return this.parent.get(x)!
  }

  union(x: string, y: string): void {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX !== rootY) {
      const rankX = this.rank.get(rootX)!
      const rankY = this.rank.get(rootY)!
      if (rankX > rankY) {
        this.parent.set(rootY, rootX)
      } else if (rankX < rankY) {
        this.parent.set(rootX, rootY)
      } else {
        this.parent.set(rootY, rootX)
        this.rank.set(rootX, rankX + 1)
      }
    }
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  const uf = new UnionFind()
  const emailToName = new Map<string, string>()

  for (const account of accounts) {
    const name = account[0]
    for (let i = 1; i < account.length; i++) {
      emailToName.set(account[i], name)
      if (i > 1) {
        uf.union(account[1], account[i])
      }
    }
  }

  const rootToEmails = new Map<string, Set<string>>()
  for (const email of emailToName.keys()) {
    const root = uf.find(email)
    if (!rootToEmails.has(root)) {
      rootToEmails.set(root, new Set())
    }
    rootToEmails.get(root)!.add(email)
  }

  const mergedAccounts: string[][] = []
  for (const [root, emails] of rootToEmails.entries()) {
    const name = emailToName.get(root)!
    const sortedEmails = Array.from(emails).sort()
    mergedAccounts.push([name, ...sortedEmails])
  }

  return mergedAccounts
}
