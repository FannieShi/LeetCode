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

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = strs[0]
  if(!result){ return '' }
  for(let i=1; i<strs.length; i++){
    if(!strs[i]){
      result = ''
      break;
    }
    for(let j=result.length; j>=0; j--){
      if(strs[i].indexOf(result.slice(0, j)) == 0){
        result = result.slice(0, j)
        break;
      }
    }
    if(!result){
      break;
    }
  }
  return result
};