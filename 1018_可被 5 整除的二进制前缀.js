/**
 * 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 * 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false
 * @param {number[]} A
 * @return {boolean[]}
 */
//方法1
var prefixesDivBy5 = function(A) {
  let arr = []
  let result = 0
  for(let i=0; i<A.length; i++){
    result = (result * 2 + A[i]) % 5
    arr.push(result == 0)
  }
  return arr
};
//方法2,位运算
var prefixesDivBy5 = function(A) {
  let arr = []
  let result = 0
  for(let i=0; i<A.length; i++){
    result <<= 1
    result += A[i]
    result %= 5
    arr.push(result == 0)
  }
  return arr
};