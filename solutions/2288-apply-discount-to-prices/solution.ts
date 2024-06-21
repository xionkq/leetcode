/**
 * 思路：将字符串转为数组，使用map遍历，通过正则判断item是否为价格
 * 坑1. 匹配开头的$符号需要转义
 * 坑2. [0-9]需要匹配1或多次而不是0或多次
 * 坑3. 需要以[0-9]结尾，添加结束符$
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

function discountPrices(sentence: string, discount: number): string {
  const reg = /^\$[0-9]+$/
  const arr = sentence.split(' ').map((item) => {
    if (reg.test(item)) {
      const n = (Number(item.substring(1)) * (100 - discount)) / 100
      return '$' + n.toFixed(2)
    }
    return item
  })

  return arr.join(' ')
}
