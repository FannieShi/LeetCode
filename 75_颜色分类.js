/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 注意:不能使用代码库中的排序函数来解决这道题。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(let i=0, len=nums.length; i<len; i++){
    if(nums[i] == 0){
      nums.unshift(nums.splice(i, 1))
    }else if(nums[i] == 2){
      nums.push(nums.splice(i, 1))
      len--
      i--
    }
  }
};