/**
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = 1
  let m = Math.abs(n)
  if(Math.abs(x) == 1){ return m%2==0 ? 1 : x }
  if(x == 0){ return 0}
  while(m){
    if(m%2!=0){
      res*=x
      m--
    }
    x*=x
    m/=2
  }
  return n >= 0 ? res : 1/res
};