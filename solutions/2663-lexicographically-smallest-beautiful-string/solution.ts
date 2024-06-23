/**
 * 思路：根据s找到目标字符串res，res需满足所有字符小于k且没有回文字串
 * 1. 所有字符小于k，且字符数刚好大于s，因此从s中最后一个字符开始加
 * 2. 原字符s没有回文字串，因此res没有字串条件为，修改处index的字符不同于index-1和index-2，最多三次便可以找到
 * 若修改最后一个字符没有办法满足条件，则从倒数第二个开始，满足条件后需要更新其后所有字符（从a开始，需要满足条件2）
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function smallestBeautifulString(s: string, k: number): string {
  const generateResult = (s: string, index: number, c: string) => {
    const sArr = s.split('')
    sArr[index] = c
    for (let i = index + 1; i < sArr.length; i++) {
      const set = new Set<string>()
      for (let j = 1; j < 3; j++) {
        i - j >= 0 && set.add(sArr[i - j])
      }
      // 从a开始找不同于前两个字符的目标字符，找三次
      for (let j = 0; j < 3; j++) {
        const newCharCode = 'a'.charCodeAt(0) + j
        const newChar = String.fromCharCode(newCharCode)
        if (!set.has(newChar)) {
          sArr[i] = newChar
          break
        }
      }
    }
    return sArr.join('')
  }

  for (let i = s.length - 1; i >= 0; i--) {
    // 将i前面两个字符存起来，修改后的i不可与其相同
    const set = new Set<string>()
    for (let j = 1; j < 3; j++) {
      i - j >= 0 && set.add(s[i - j])
    }
    // 找到不同于前两个字符的最小字符，因此最多三次便能找到
    for (let j = 1; j < 4; j++) {
      const newCharCode = s[i].charCodeAt(0) + j
      const newChar = String.fromCharCode(newCharCode)
      if (newCharCode - 'a'.charCodeAt(0) < k && !set.has(newChar)) {
        // 说明此字符符合要求，接下来要把该索引之后的字符补全
        return generateResult(s, i, newChar)
      }
    }
  }

  return ''
}
