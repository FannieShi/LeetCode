/**
 * 给定一个正整数，检查他是否为交替位二进制数：换句话说，就是他的二进制数相邻的两个位数永不相等。
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let str = n.toString(2)
  for(let i=0; i<str.length-1; i++){
    if(str[i] == str[i+1]){
      return false
    }
  }
  return true
};