/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let arr = []
  for(let i=k-1; i<nums.length; i++){
    if(arr.length == 0){
      let sum = nums[k-1]
      for(let j=0; j<k-1; j++){
        sum += nums[j]
      }
      arr[0] = sum
    }else {
      arr.push(arr[arr.length-1] + nums[i] - nums[i-k])
    }
  }
  arr.sort((a, b) => {
    return b - a
  })
  return arr[0]/k
};