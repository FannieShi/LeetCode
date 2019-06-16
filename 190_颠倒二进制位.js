/**
 * 颠倒给定的 32 位无符号整数的二进制位。
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let str = ''
  for(let i=31; i>=0; i--){
    if(n >= Math.pow(2, i)){
      n -= Math.pow(2, i)
      str = '1' + str
    }else {
      str = '0' + str
    }
  }
  return parseInt(str, 2)
};