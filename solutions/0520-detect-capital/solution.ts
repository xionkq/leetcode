/**
 * 思路：若第一个字母是小写，则其后所有字母都得是小写，若第一个字母是大写，则其后都得是小写或大写
 * 坑：大写字母的 char code 比小写字母小
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function detectCapitalUse(word: string): boolean {
  const isAllLowerCase = (s: string) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i].charCodeAt(0) < 'a'.charCodeAt(0)) {
        return false
      }
    }
    return true
  }

  const isAllUpperCase = (s: string) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i].charCodeAt(0) >= 'a'.charCodeAt(0)) {
        return false
      }
    }
    return true
  }

  const w = word[0]
  const isLower = w.charCodeAt(0) >= 'a'.charCodeAt(0)
  return isLower
    ? isAllLowerCase(word.substring(1))
    : isAllLowerCase(word.substring(1)) || isAllUpperCase(word.substring(1))
}
