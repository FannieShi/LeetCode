/**
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
 * 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let k = K.toString().split('')
  for(let i=A.length-1; i>=0; i--){
    let sum = A[i] + (k.length > 0 ? parseInt(k[k.length-1]) : 0)
    A[i] = sum % 10
    k.pop()
    if(i==0){
      if(sum <= 9){
        return k.concat(A)
      }else {
        i++
        A.unshift(0)
      }
    }
    A[i-1] += sum > 9 ? 1 : 0
  }
};