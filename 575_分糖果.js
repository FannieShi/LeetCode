/**
 * 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let set = new Set([])
  for(let i=0; i<candies.length; i++){
    if(!set.has(candies[i])){
      set.add(candies[i])
    }
    if(set.size >= candies.length/2){
      return candies.length/2
    }
  }
  return set.size
};