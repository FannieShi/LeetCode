/**
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let str = '',
    len = s.length%2==0 ? s.length/2 : Math.floor(s.length/3)
  for(let i=0; i<len; i++){
    str+=s[i]
    if(s.length % str.length == 0){
      let set = new Set(s.split(str))
      if(set.size == 1 && set.has('')){
        return true
      }
    }
  }
  return false
};