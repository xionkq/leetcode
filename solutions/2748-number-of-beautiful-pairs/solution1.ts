/**
 * 思路：一次遍历，相当于每个元素与其之前元素比较，将第二次遍历转换为遍历1-9的数字
 * 计算最大公因数：使用a % b递归，若结果为0则除数为结果
 * 时间复杂度：O(n * 10)
 * 空间复杂度：O(10)
 */

function countBeautifulPairs(nums: number[]): number {
  let res = 0
  let cnt = new Array(10).fill(0)

  for (let x of nums) {
    for (let y = 1; y <= 9; y++) {
      if (gcd(x % 10, y) === 1) {
        res += cnt[y]
      }
    }
    while (x >= 10) {
      x = Math.floor(x / 10)
    }
    cnt[x]++
  }
  return res
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}
