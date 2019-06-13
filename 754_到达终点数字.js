/**
 * 在一根无限长的数轴上，你站在0的位置。终点在target的位置。
 * 每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。
 * 返回到达终点需要的最小移动次数。
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  let abs = Math.abs(target)
  let n = 0
  let sum = 0
  while(sum<abs){
    n++
    sum += n
  }
  if((sum-abs) % 2 == 0){
    return n
  }else{
    if(n%2 == 0){
      return n + 1
    }else {
      return n + 2
    }
  }
};