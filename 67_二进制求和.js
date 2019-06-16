/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let long = a.length >= b.length ? a.split('') : b.split('')
  let short = a.length >= b.length ? b.split('')  : a.split('')
  let next = 0
  for(let i=0; i<Math.abs(a.length - b.length); i++){
    short.unshift(0)
  }
  for(let i=long.length - 1; i>=0; i--){
    let temp = Number(long[i]) + Number(short[i]) + next
    long[i] = temp % 2
    next = temp > 1 ? 1 : 0
  }
  if(next == 1){
    long.unshift(1)
  }
  return long.join('')
};