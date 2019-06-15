/**
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 例如，
 *  1 -> A
 *  2 -> B
 *  3 -> C
 *  ...
 *  26 -> Z
 *  27 -> AA
 *  28 -> AB
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let temp = n
  let result = ''
  while(temp != 0){
    let a = temp % 26
    if(a != 0){
      result = String.fromCharCode(a + 64) + result
      temp = (temp - a)/26
    }else {
      result = 'Z' + result
      temp = (temp - 26)/26
    }

  }
  return result
};