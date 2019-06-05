/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 在 S 上反复执行重复项删除操作，直到无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let arr = S.split('')
  for(let i=0; i<arr.length; i++){
    if(arr[i + 1] && arr[i] == arr[i+1]){
      arr.splice(i, 2)
      i = i - 2
    }
  }
  return arr.join('')
};