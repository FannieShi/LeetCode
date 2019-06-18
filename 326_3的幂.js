/**
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

  if(n<1){
    return false
  }else {
    return 1162261467 % n == 0
  }
};