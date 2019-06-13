/**
 * 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if(nums.length <= 1){ return nums.length }
  let arr = [nums[0]]
  let lastIndex = 0
  for(let i=1; i<nums.length; i++){
    if(i != nums.length -1){
      if(nums[i] >= nums[i+1] && nums[i-1] < nums [i]&& i - lastIndex + 1 > arr.length){
        arr = nums.slice(lastIndex, i+1)
      }
      if(nums[i-1] >= nums[i] && nums[i] < nums [i+1]){
        lastIndex = i
      }
    }else if(nums[i-1] < nums [i]&& i - lastIndex + 1 > arr.length){
      arr = nums.slice(lastIndex, i+1)
    }
  }
  return arr.length
};