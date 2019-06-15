/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = ''
  if(strs[0]){
    for(let i=0; i<strs[0].length; i++){
      let isEqual = strs.every(val => {
        return val[i] == strs[0][i]
      })
      if(isEqual){
        result += strs[0][i]
      }else{
        return result
      }
    }
  }
  return result
};