/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  for(let i=0, j=s.length -1; i<=j;){
    if(s[i] != s[j]){
      let str1 = s.slice(0, i) + s.slice(i+1)
      let str2 = s.slice(0, j) + s.slice(j+1)
      if(isTrue(str1) || isTrue(str2)){
        return true
      }else {
        return false
      }
    }else {
      i++
      j--
    }
  }
  return true
  function isTrue(str){
    return str == str.split('').reverse().join('')
  }
};