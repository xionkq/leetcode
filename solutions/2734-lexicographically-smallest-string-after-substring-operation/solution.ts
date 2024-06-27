/**
 * 思路：找到第一个非a字符作为字串起始点，其后第一个a作为结束点，该范围内字串前进一即为结果
 * 需要注意的是题目要求必须找到非空字串执行一次，因此若全为a，则需将其最后一位置为z
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function smallestString(s: string): string {
  const arr = s.split('')
  if (arr.every((v) => v === 'a')) {
    arr[arr.length - 1] = 'z'
    return arr.join('')
  }

  let isFindStart = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' && !isFindStart) {
      continue
    } else if (arr[i] === 'a') {
      break
    }
    !isFindStart && (isFindStart = true)
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1)
  }

  return arr.join('')
}
