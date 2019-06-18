/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  for(let i=0; i<nums.length; i++){
    let current = nums[i]
    max = Math.max(max, current)
    for(let j=i+1; j<nums.length; j++){
      current += nums[j]
      max = Math.max(max, current)
    }
  }
  return max
};