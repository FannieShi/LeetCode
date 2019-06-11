/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let s1 = ''
  let s2 = ''
  for(let i=0; i<s.length; i++){
    if(/[a-zA-Z0-9]/.test(s.charAt(i))){
      s1 = s.charAt(i).toLowerCase() + s1
      s2 = s2 + s.charAt(i).toLowerCase()
    }
  }
  return s1 == s2
};