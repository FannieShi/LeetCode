/**
 * 给定一个整数，将其转化为7进制，并以字符串形式输出。
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if(num == 0){ return '0'}
  let res = ''
  n = Math.abs(num)
  while(n){
    res = n%7 + res
    n = Math.floor(n/7)
  }
  return num<0 ? '-' + res : res
};