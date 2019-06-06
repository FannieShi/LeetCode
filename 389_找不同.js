/**
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 请找出在 t 中被添加的字母。
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sum = 0
  for(let i=0; i<s.length; i++){
    sum += t.charCodeAt(i) - s.charCodeAt(i)
  }
  sum += t.charCodeAt(t.length - 1)
  return String.fromCharCode(sum)
};