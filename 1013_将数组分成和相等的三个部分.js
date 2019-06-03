/**
 * 给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
 * 形式上，如果我们可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  var sum = 0
  A.forEach(val => {
    sum += val
  })
  if(sum % 3 != 0){
    return false
  }
  var sum2 = 0
  var count = 0
  for(var i=0; i<A.length; i++){
    sum2 += A[i]
    if(sum2 != sum/3 && i == A.length - 1){
      return false
    }
    if(sum2 == sum/3 && count < 3){
      count++
      if(count != 3){
        sum2 = 0
      }
    }
  }
  return count == 3 ? true : false
};