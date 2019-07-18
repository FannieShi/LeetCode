/**
 * 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  for(let i=0; i<nums.length; i++){
    if(nums[i] != nums[i+1]){
      return nums[i]
    }
    i++
  }
};