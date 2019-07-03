/**
 * 峰值元素是指其值大于左右相邻值的元素。
 * 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
 * 你可以假设 nums[-1] = nums[n] = -∞。
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0,
    right = nums.length - 1
  while(left<right){
    let middle = Math.floor((left+right)/2)
    if(nums[middle]>nums[middle+1]){
      right=middle
    }else {
      left=middle+1
    }
  }
  return right
};