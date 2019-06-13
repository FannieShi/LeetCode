/**
 * 给定一个二进制数组， 计算其中最大连续1的个数。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let lastIndex = 0
  let length = 0
  nums.forEach((item, index) => {
    if(item == 1 && (index == 0 || nums[index-1] == 0)){
      lastIndex = index
    }
    if(item == 0 && index != 0 && nums[index-1] == 1 && index - lastIndex > length){
      length = index - lastIndex
    }
    if(item == 1 && index == nums.length - 1 && index - lastIndex + 1 > length){
      length = index - lastIndex  + 1
    }
  })
  return length
};