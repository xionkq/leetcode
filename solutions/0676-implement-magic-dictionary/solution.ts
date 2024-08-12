/**
 * 思路：构建一个哈希表用于存储字典数组，每次 search 时遍历哈希表判断是否满足条件
 * 时间复杂度：O(q * n * l)
 * 空间复杂度：O(n * l)
 */

class MagicDictionary {
  map = new Map<number, string[]>()

  constructor() {}

  buildDict(dictionary: string[]): void {
    dictionary.forEach((item) => {
      const l = item.length
      this.map.set(l, [...(this.map.get(l) || []), item])
    })
  }

  search(searchWord: string): boolean {
    const l = searchWord.length
    const arr = this.map.get(l)
    if (!arr) {
      return false
    }
    for (let i = 0; i < arr.length; i++) {
      const str = arr[i]
      let not = 0
      for (let j = 0; j < str.length; j++) {
        if (str[j] !== searchWord[j]) {
          not++
        }
        if (not === 2) {
          break
        }
      }
      if (not === 1) {
        return true
      }
    }

    return false
  }
}
