/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * 返回被除数 dividend 除以除数 divisor 得到的商。
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let isMinus = false
  if((dividend<0 && divisor>0) || (dividend>0 && divisor<0)){
    isMinus = true
  }
  let b = Math.abs(dividend)
  let a = Math.abs(divisor)
  let result = 0
  while(a<=b && a!= 1){
    result++
    b -= a
  }
  if(a == 1){
    result = b
  }
  if(isMinus){ result = -result}
  if(result > Math.pow(2, 31) - 1){
    result = Math.pow(2, 31) - 1
  }
  return result
};