/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for(let i=0; i<nums.length; i++){
    if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
      return nums[i]
    }
  }
};