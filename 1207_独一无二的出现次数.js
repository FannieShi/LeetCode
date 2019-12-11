/**
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const obj = {}
  const set = new Set()
  arr.forEach(item => {
    if(!obj[item]){
      obj[item] = 1
    }else {
      obj[item]++
    }
  })
  for(let i in obj){
    if(set.has(obj[i])){
      return false
    }else {
      set.add(obj[i])
    }
  }
  return true
};