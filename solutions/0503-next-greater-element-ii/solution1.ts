/**
 * 思路：单调栈
 * 1. 每遍历一个元素就将其下标推入栈中
 * 2. 入栈之前先判断当前元素j是否比上一个入栈元素i大
 *  2.1 若是则j为i的下一个大更值，i出栈，并再此判断上一个入栈值
 *  2.2 若否或者栈为空，则continue，并将j的索引入栈
 * 3. 遍历数组两次后结束
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length
  const res = new Array(n).fill(-1)
  const stk = [] as number[]

  for (let i = 0; i < 2 * n - 1; i++) {
    const index = i % n
    while (stk.length && nums[index] > nums[stk[stk.length - 1]]) {
      res[stk.pop()!] = nums[index]
    }
    i < n && stk.push(index)
  }

  return res
}
