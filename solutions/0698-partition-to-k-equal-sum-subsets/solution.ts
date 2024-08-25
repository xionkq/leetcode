/**
 * 思路：思路就是 dfs + 记忆化搜索，需要注意的是
 * 1. dfs 参数无需判断分割次数是否满足 k，因为每份 target，分割完一定是 k 次
 * 2. 当元素已经被选择时，将其位置置为无效值，比将其删除更高效
 * 3. 进 dfs 前，若可直接判断结果则返回
 * 时间复杂度：O(n * 2 ** n)
 * 空间复杂度：O(2 ** n)
 */

function canPartitionKSubsets(nums: number[], k: number): boolean {
  const sum = nums.reduce((s, n) => s + n, 0)
  const target = sum / k
  if (sum % k !== 0) {
    return false
  }
  const sortedNums = nums.sort((a, b) => a - b)
  if (sortedNums[sortedNums.length - 1] > target) {
    return false
  }
  const store = new Map<string, boolean>()

  const dfs = (arr: number[], s: number): boolean => {
    // 不用判断是否达到 k 次，因为如果数组分完，且每份都是 target，那么一定是 k 份
    if (Number(arr.join('')) === 0 && s === 0) {
      return true
    }
    const key = [...arr, s].join('')
    if (store.has(key)) {
      return store.get(key)!
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        continue
      }
      if (s + arr[i] > target) {
        break
      }
      const newArr = [...arr]
      newArr[i] = 0
      // 若和等于 target，则下次递归第二个参数为 0
      if (dfs(newArr, (s + arr[i]) % target)) {
        return true
      }
    }

    store.set(key, false)
    return false
  }

  return dfs(sortedNums, 0)
}
