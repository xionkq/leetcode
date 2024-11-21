/**
 * 思路：小蛇不会跑出矩阵，简单题重拳出击，没什么好说的
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */

function finalPositionOfSnake(n: number, commands: string[]): number {
  let j = 0
  let i = 0
  commands.forEach((item) => {
    if (item === 'UP') i--
    if (item === 'DOWN') i++
    if (item === 'LEFT') j--
    if (item === 'RIGHT') j++
  })
  return i * n + j
}
