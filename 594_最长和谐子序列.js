/**
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let queryObj = {}
  let res = 0
  nums.forEach(item => {
    queryObj[item] = queryObj[item] != undefined ? queryObj[item] + 1 : 1
  })
  for(let i in queryObj){
    i = parseInt(i)
    if(queryObj[i-1]!=undefined){
      res = Math.max(queryObj[i-1] + queryObj[i], res)
    }
    if(queryObj[i+1]!=undefined){
      res = Math.max(queryObj[i+1] + queryObj[i], res)
    }

  }
  return res
};