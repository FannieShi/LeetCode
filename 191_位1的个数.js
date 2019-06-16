/**
 * 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0
  for(let i=31; i>=0; i--){
    if(n >= Math.pow(2, i)){
      n -= Math.pow(2, i)
      count++
    }
  }
  return count
};