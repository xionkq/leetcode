/**
 * 思路：将数组按字符串长度从大到小排序，使用双层循环从左到右判断每个字符串是否为其他串的子串，若不是则该串为结果
 * 时间复杂度：O(n ^ 2 * l)，l为数组中最长字符串长度
 * 空间复杂度：O(1)
 */

function findLUSlength(strs: string[]): number {
  const sortedStrs = strs.sort((a, b) => b.length - a.length);

  const isSubsequence = (longStr: string, shortStr: string) => {
    if (longStr.length === shortStr.length) {
      return longStr === shortStr
    }
    let indexLong= 0
    let indexShort= 0
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

  for (let i = 0; i < sortedStrs.length; i++) {
    let isSub = false
    for (let j = 0; j < sortedStrs.length; j++) {
      if (i === j) {
        continue
      }
      if (sortedStrs[j].length < sortedStrs[i].length) {
        break
      }
      if (isSubsequence(sortedStrs[j], sortedStrs[i])) {
        isSub = true
        break
      }
    }
    if (!isSub) {
      return sortedStrs[i].length
    }
  }

  return -1
};