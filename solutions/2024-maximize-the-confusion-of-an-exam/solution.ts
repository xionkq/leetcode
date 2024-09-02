/**
 * 思路：在滑动窗口中维护与目标字符串 char 不同的另一个字符串的出现次数 count
 * 若 count 小于等于 k，则窗口长度满足条件为目标值
 * 若 count 大于 k，则左节点右移直到 count 小于或等于 k
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function maxConsecutiveAnswers(answerKey: string, k: number): number {
  // 寻找连续个目标字符串 char 的最大长度
  const findMax = (char: string) => {
    let countOther = 0
    let res = 0
    let left = 0,
      right = 0
    while (right < answerKey.length) {
      if (answerKey[right] !== char) {
        countOther++
      }
      right++
      while (countOther > k) {
        if (answerKey[left] !== char) {
          countOther--
        }
        left++
      }
      res = Math.max(res, right - left)
    }
    return res
  }

  return Math.max(findMax('T'), findMax('F'))
}
