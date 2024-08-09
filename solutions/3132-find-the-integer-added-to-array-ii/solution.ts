/**
 * 思路：根据题意可知，结果为在三个可能的 x 值中，三个可能的值为：
 * 1. 先将 num1 和 num2 排序，num2 最小值与 num1 中最小三个值的差值即为三个可能的 x；
 * 2. 然后分别从小到大取出每个可能的 x，遍历 num2 计算其是否符合条件
 * 3. 若 num2 中每个值减去 x 的结果都能在 num1 中找到，则其为结果
 * 4. 需要注意的是，两数组中每个元素要一一对应，不能多个元素对应一个值
 * 时间复杂度：O(m log m + m log n + 3mn)
 * 空间复杂度：O(log m + log n)
 */

function minimumAddedInteger(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  if (nums2.length === 1) {
    return nums2[0] - nums1[2]
  }

  const arr = new Array<number>()
  arr.push(nums2[0] - nums1[2])
  arr.push(nums2[0] - nums1[1])
  arr.push(nums2[0] - nums1[0])

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i]
    let nums1Index = 0
    if (
      nums2.every((item2) => {
        const newIndex = nums1.slice(nums1Index, nums1.length).findIndex((item1) => item1 === item2 - x)
        if (newIndex === -1) {
          return false
        }
        nums1Index += newIndex + 1
        return true
      })
    ) {
      return x
    }
  }

  return 0
}
