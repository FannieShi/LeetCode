/**
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr = str.split(' ')
  let obj = {}
  let obj2 = {}
  if(arr.length != pattern.length){
    return false
  }
  for(let i=0; i<arr.length; i++){
    if(obj[pattern[i]] == undefined && obj2[arr[i]] == undefined){
      obj[pattern[i]] = arr[i]
      obj2[arr[i]] = pattern[i]
    }else if(obj[pattern[i]] != arr[i] || obj2[arr[i]] != pattern[i]){
      return false
    }
  }
  return true
};