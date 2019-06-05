/**
 * 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）
 * 以这种方式修改数组后，返回数组可能的最大和。
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
  let arr = A.sort((a, b) => {
    return a - b
  })
  let result = 0
  for(let i=0; i<K; i++){
    arr[0] = -arr[0]
    arr = arr.sort((a, b) => {
      return a - b
    })
  }
  arr.forEach(val => {
    result += val
  })
  return result
};