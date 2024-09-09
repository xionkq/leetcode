/**
 * 思路：链表的遍历，好久没写有些生疏的
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeNodes(head: ListNode | null): ListNode | null {
  let node: ListNode | null = null
  let res = node
  let current = 0
  while (head) {
    if (head.val === 0 && current !== 0) {
      const n = new ListNode(current, null)
      if (!node) {
        node = n
        res = node
      } else {
        node.next = n
        node = node.next
      }
      current = 0
    } else {
      current += head.val
    }
    head = head.next
  }

  return res
}
