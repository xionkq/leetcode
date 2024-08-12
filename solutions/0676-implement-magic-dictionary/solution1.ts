/**
 * 思路：构建字典树，字典树为一个数组，其根为每个单词的第一个字符，然后通过 dfc 回溯遍历节点判断是否与搜索目标相等
 * 坑：注意 dfs 的边界条件，注意 isFinish 应该给哪一个节点
 * 时间复杂度：O(n * l + q * l * |Σ|)，buildDict 复杂度为 n * l，search 为 l * |Σ| 相当于每个字符搜索了26次
 * 空间复杂度：O(n * l)，n 为字典数组个数，l为字典数组平均长度
 */

class MagicDictionary {
  root = new Tire()

  constructor() {}

  buildDict(dictionary: string[]): void {
    for (const word of dictionary) {
      let currentNode = this.root
      for (let i = 0; i < word.length; i++) {
        const char = word[i]
        const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0)
        if (!currentNode.child[charCode]) {
          currentNode.child[charCode] = new Tire()
        }
        currentNode = currentNode.child[charCode]
        if (i === word.length - 1) {
          currentNode.isFinish = true
        }
      }
    }
  }

  search(searchWord: string): boolean {
    return dfs(searchWord, 0, this.root, 0)
  }
}

class Tire {
  isFinish = false
  child = new Array(26).fill(0)

  constructor() {}
}

function dfs(word: string, wordIndex: number, node: Tire, diffCount: number): boolean {
  if (diffCount > 1) {
    return false
  }

  if (wordIndex === word.length) {
    return diffCount === 1 && node.isFinish
  }
  const charCode = word[wordIndex].charCodeAt(0) - 'a'.charCodeAt(0)
  for (let i = 0; i < node.child.length; i++) {
    if (node.child[i] === 0) {
      continue
    }
    let res = false
    if (i === charCode) {
      res = dfs(word, wordIndex + 1, node.child[i], diffCount)
    } else {
      res = dfs(word, wordIndex + 1, node.child[i], diffCount + 1)
    }

    if (res) {
      return res
    }
  }
  return false
}
