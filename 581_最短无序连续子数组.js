/**
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 你找到的子数组应是最短的，请输出它的长度。
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let arr = JSON.parse(JSON.stringify(nums))
  arr.sort((a, b) => {
    return a - b
  })
  for(let i=0, j=nums.length-1; i<=j;){
    if(arr[i] == nums[i]){
      i++
    }
    if(arr[j] == nums[j]){
      j--
    }
    if(arr[i] != nums[i] && arr[j] != nums[j]){
      return j - i + 1
    }
  }
  return 0
};