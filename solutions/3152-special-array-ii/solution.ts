/**
 * 思路：需要想到以下思路，构建一个类似前缀和的数组 dp，dp[i] 值为以 i 结尾的最长特殊数组的长度
 * 因此判断 queries 中子数组的长度是否符合要求即可
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(m)
 */

function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const dp = new Array<number>()
  dp[0] = 1
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i - 1] + nums[i]) % 2 === 0) {
      dp[i] = 1
    } else {
      dp[i] = dp[i - 1] + 1
    }
  }

  return queries.map((query) => {
    return dp[query[1]] >= query[1] - query[0] + 1
  })
}
