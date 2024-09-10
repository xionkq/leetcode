/**
 * 思路：这是正常人能想出来的解法？？
 * 时间复杂度：O(n ** 2)
 * 空间复杂度：O(n)
 */

function countQuadruplets(nums: number[]): number {
  // 索引为 index，lessThenK[index] 代表比 index 小的元素的个数，此处用于存储小于 nums[k] 的元素个数，作为 i 的候选
  const lessThenNumK = new Array(nums.length + 1).fill(0)
  let res = 0
  for (let j = 0; j < nums.length; j++) {
    // 用于存储比 nums[j] 大的元素个数，作为 l 的候选
    let largerThanNumJ = 0

    for (let k = nums.length - 1; k > j; k--) {
      if (nums[k] < nums[j]) {
        res += lessThenNumK[nums[k]] * largerThanNumJ
      } else {
        // 若元素比 nums[j] 大，则记录值加一
        largerThanNumJ++
      }
    }

    // 遍历到 num[j] 了，因此所有比 num[j] 大的元素值次数可加一
    for (let x = nums[j] + 1; x <= nums.length; x++) {
      lessThenNumK[x]++
    }
  }

  return res
}
