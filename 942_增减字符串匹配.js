/**
 * 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。
 * 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：
 * 如果 S[i] == "I"，那么 A[i] < A[i+1]
 * 如果 S[i] == "D"，那么 A[i] > A[i+1]
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let arr = new Array(S.length+1),
    max = S.length,
    min = 0
  for(let i=0; i<S.length; i++){
    if(S[i] == 'I'){
      arr[i] = min++
    }else if(S[i] == 'D'){
      arr[i] = max--
    }
  }
  arr[arr.length-1] = max
  return arr
};