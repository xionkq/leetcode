/**
 * 思路：略
 */

function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  const res = [0, 0]
  nums1.forEach((num) => {
    nums2.includes(num) && res[0]++
  })

  nums2.forEach((num) => {
    nums1.includes(num) && res[1]++
  })

  return res
}
