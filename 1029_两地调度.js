/**
 * 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
 * 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let arr = []
  let sum = 0
  for(let i=0; i<costs.length; i++){
    arr.push({
      index: i,
      diff: costs[i][0] - costs[i][1]
    })
  }
  arr.sort((a, b) => {
    return a.diff - b.diff
  }).forEach((val, index) => {
    if(index < costs.length/2){
      sum += costs[val.index][0]
    }else {
      sum += costs[val.index][1]
    }
  })
  return sum
};