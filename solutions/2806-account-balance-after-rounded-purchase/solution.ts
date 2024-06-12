/**
 * 思路：四舍五入法
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 */

function accountBalanceAfterPurchase(purchaseAmount: number): number {
  return 100 - (Math.round(purchaseAmount / 10) * 10)
}
