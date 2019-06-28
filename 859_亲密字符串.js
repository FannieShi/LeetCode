/**
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  let len = A.length
  if(len != B.length || len < 2){ return false }
  let count = 2
  let arr = []
  for(let i=0; i<len; i++){
    if(A[i] != B[i]){
      if(arr.length == 0){
        arr = [A[i], B[i]]
      }else if(A[i] != arr[1] || B[i] != arr[0]){
        return false
      }
      if(!count--){
        return false
      }
    }
  }
  return count == 0 || count == 2 && len > new Set(A).size ? true : false
};