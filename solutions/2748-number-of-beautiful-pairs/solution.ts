/**
 * 思路：暴力遍历，遍历两次数组，判断是否符合要求
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(1)
 */

function countBeautifulPairs(nums: number[]): number {
  let res = 0

  const isPairs = (a: number, b: number) => {
    if ((a !== 1 && a === b) || (a % 2 === 0 && b % 2 === 0) || (a % 3 === 0 && b % 3 === 0)) {
      return false
    }
    return true
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const a = nums[i].toString()[0]
      const b = nums[j] % 10
      isPairs(Number(a), Number(b)) && res++
    }
  }

  return res
};
