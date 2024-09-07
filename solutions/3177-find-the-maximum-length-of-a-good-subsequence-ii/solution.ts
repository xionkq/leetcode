/**
 * 思路：根据解答来整理的思路，相当于在前一题的基础上添加了记忆化，因此可以少遍历一轮，还是比较难想的
 * 时间复杂度：O(k * n)
 * 空间复杂度：O(K * n)
 */

function maximumLength(nums: number[], k: number): number {
  // key 为 num；value 为最长好序列组成的数组；代表以 num 结尾的，满足 0 到 k 条件的好序列的最大长度
  const dp = new Map<number, number[]>()
  // 满足 0 到 k 条件下好序列的最长长度组成的数组
  const mp = new Array(k + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    if (!dp.has(nums[i])) {
      dp.set(nums[i], new Array(k + 1).fill(0))
    }
    const arr = dp.get(nums[i])!
    for (let h = 0; h <= k; h++) {
      // 找到在索引 i 之前，结尾值为 num[i] 且 h 相同的好序列长度，序列长度可以 + 1
      arr[h]++
      // 找到在索引 i 之前，结尾值与 num[i] 不同，由于不同因此 h 一定会加一，所以找 mp[h - 1]，使其序列长度 + 1
      arr[h] = Math.max(arr[h], (mp[h - 1] || 0) + 1)
    }
    for (let h = 0; h <= k; h++) {
      mp[h] = Math.max(mp[h], arr[h])
    }
  }

  return mp[k]
}
