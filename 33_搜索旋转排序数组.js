/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if(target < nums[0] && target > nums[nums.length-1]){ return -1 }
  if(target >=nums[0]){
    for(let i=0; i<nums.length; i++){
      if(nums[i] == target){
        return i
      }else if(nums[i] > nums[i+1] || (nums[i]< target && nums[i+1] > target)){
        return -1
      }
    }
  }else {
    for(let i=nums.length; i>0; i--){
      if(nums[i] == target){
        return i
      }else if(nums[i] < nums[i-1] || (nums[i-1]< target && nums[i] > target)){
        return -1
      }
    }
  }
  return -1
};