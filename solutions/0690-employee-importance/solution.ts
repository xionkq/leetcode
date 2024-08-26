/**
 * 思路：先根据 id 构建一个哈希表，然后深度优先搜索即可
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

function getImportance(employees: Employee[], id: number): number {
  const map = new Map<number, Employee>()
  employees.forEach((item) => map.set(item.id, item))

  const dfs = (id: number): number => {
    const employeeArr = map.get(id)!.subordinates
    return employeeArr.reduce((s, i) => s + dfs(i), map.get(id)!.importance)
  }

  return dfs(id)
}
