/**
 * 思路：分类讨论，在车子开完了之后讨论最后一趟车的乘坐情况，坐满或未满
 * 时间复杂度：O(n * log n + m * log m)
 * 空间复杂度：O((log n) + m)
 */

function latestTimeCatchTheBus(buses: number[], passengers: number[], capacity: number): number {
  buses.sort((a, b) => a - b)
  passengers.sort((a, b) => a - b)
  let busIndex = 0
  let passengerIndex = 0
  let number = 0
  while (busIndex < buses.length) {
    number = 0
    while (passengers[passengerIndex] <= buses[busIndex] && passengerIndex < passengers.length && number < capacity) {
      number++
      passengerIndex++
    }
    busIndex++
  }

  let res: number
  if (number === capacity) {
    // 说明最后一趟车坐满了，需要比最后一个人走得早
    res = passengers[passengerIndex - 1]
  } else {
    // 说明最后一趟车没坐满，因此在发车点前赶到就行
    res = buses[buses.length - 1]
  }
  const set = new Set(passengers)
  while (set.has(res)) {
    res--
  }
  return res
}
