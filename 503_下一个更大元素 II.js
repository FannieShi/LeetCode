/**
 * 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let arr = []
  for(let i=0; i<nums.length; i++){
    for(let j=1; j<=nums.length; j++){
      let index = i + j
      if(index>=nums.length){ index -= nums.length }
      if(nums[index]>nums[i]){
        arr[i] = nums[index]
        break
      }
      if(j==nums.length){
        arr[i] = -1
      }
    }
  }
  return arr
};