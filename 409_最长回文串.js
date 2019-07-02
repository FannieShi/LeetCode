/**
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 注意: 假设字符串的长度不会超过 1010。
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {}
  let res = 0
  for(let i=0; i<s.length; i++){
    if(obj[s[i]] == undefined){
      obj[s[i]] = 1
    }else {
      obj[s[i]]++
    }
  }
  for(let i in obj){
    if(obj[i]%2 != 0){
      obj[i] -= obj[i]%2
    }
    res+=obj[i]
  }
  return res < s.length ? res+1 : res
};