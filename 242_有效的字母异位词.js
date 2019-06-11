/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length != t.length){
    return false
  }
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return s == t
};