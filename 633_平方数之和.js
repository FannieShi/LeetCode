/**
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let a = Math.ceil(Math.sqrt(c))
  let b = 0
  while(a >= b){
    let temp = a*a + b*b
    if(temp == c){
      return true
    }else if(temp >= c){
      a--
    }else {
      b++
    }
  }
  return false
};