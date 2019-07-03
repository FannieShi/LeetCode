/**
 * 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for(let i=0; i<nums.length; i++){
    for(let j=i+1, len=Math.min(i+k, nums.length); j<=len; j++){
      if(Math.abs(nums[i] - nums[j]) <= t){
        return true
      }
    }
  }
  return false
};