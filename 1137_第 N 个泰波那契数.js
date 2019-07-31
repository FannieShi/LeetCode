/**
 * 泰波那契序列 Tn 定义如下： 
 * T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2
 * 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const temp = [0,1,1]
  let index = 2
  if(n<3){ return temp[n] }
  while(index<n){
    temp.push(temp[index] + temp[index-1] + temp[index-2]);
    index++
  }
  return temp[index]
};