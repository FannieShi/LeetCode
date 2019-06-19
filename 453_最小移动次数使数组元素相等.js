/**
 * 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let count = 0
  let min = nums[0]
  for(let i=0; i<nums.length; i++){
    count += nums[i]
    min = Math.min(min, nums[i])
  }
  return count - min*nums.length
};