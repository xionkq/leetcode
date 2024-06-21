/**
 * 思路：不排序会更快一些
 * 时间复杂度：O(n ^ 2 * l)，l为数组中最长字符串长度
 * 空间复杂度：O(1)
 */

function findLUSlength(strs: string[]): number {
  let res = -1

  const isSubsequence = (longStr: string, shortStr: string) => {
    if (longStr.length === shortStr.length) {
      return longStr === shortStr
    }
    if (longStr.length < shortStr.length) {
      return false
    }
    let indexLong = 0
    let indexShort = 0
    while (indexLong < longStr.length && indexShort < shortStr.length) {
      if (longStr[indexLong] === shortStr[indexShort]) {
        indexLong++
        indexShort++
      } else {
        indexLong++
      }
    }
    return indexShort === shortStr.length
  }

  for (let i = 0; i < strs.length; i++) {
    let isSub = false
    for (let j = 0; j < strs.length; j++) {
      if (i === j) {
        continue
      }
      if (isSubsequence(strs[j], strs[i])) {
        isSub = true
        break
      }
    }
    if (!isSub) {
      res = Math.max(res, strs[i].length)
    }
  }

  return res
}
