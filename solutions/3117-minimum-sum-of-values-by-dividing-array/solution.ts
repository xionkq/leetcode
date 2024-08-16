/**
 * 思路：dfs，回溯搜索满足条件的子数组，记录其结果
 * 但是会超时，需要记忆化搜索（暂时不会...）
 * 时间复杂度：O(2 ^ n)
 * 空间复杂度：O(n)
 */

function minimumValueSum(nums: number[], andValues: number[]): number {
  let current = 0
  let res = Number.MAX_SAFE_INTEGER
  const dfs = (i: number, j: number, cur: number) => {
    if (i >= nums.length || j >= andValues.length) {
      return
    }
    const andRes = cur & nums[i]
    if (andRes < andValues[j]) {
      return
    } else if (andRes > andValues[j]) {
      dfs(i + 1, j, andRes)
    } else {
      current += nums[i]
      i === nums.length - 1 && j === andValues.length - 1 && (res = Math.min(res, current))
      dfs(i + 1, j + 1, nums[i + 1])
      current -= nums[i]
      dfs(i + 1, j, andRes)
    }
  }

  dfs(0, 0, nums[0])
  return res === Number.MAX_SAFE_INTEGER ? -1 : res
}
