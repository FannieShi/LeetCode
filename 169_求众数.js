/**
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let max = null
  for(let i=0; i<nums.length; i++){
    if(nums[i] != max){
      let lastIndex = nums.lastIndexOf(nums[i])
      if(lastIndex - i + 1 > nums.length/2){
        max = nums[i]
      }
      i = lastIndex
    }
  }
  return max
};