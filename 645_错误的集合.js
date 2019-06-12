/**
 * 集合 S 包含从1到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个元素复制了成了集合里面的另外一个元素的值，导致集合丢失了一个整数并且有一个元素重复。
 * 给定一个数组 nums 代表了集合 S 发生错误后的结果。你的任务是首先寻找到重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let arr = new Array(2)
  for(let i=0; i<nums.length; i++){
    if(i == 0 && nums[i] != 1){
      arr[1] = 1
    }
    if(i == nums.length-1 && nums[i] != nums.length){
      arr[1] = nums.length
      break
    }
    if(nums[i] == nums[i+1]){
      arr[0] = nums[i]
    }
    if(nums[i] + 1 < nums[i+1]){
      arr[1] = nums[i] + 1
    }
  }
  return arr
};