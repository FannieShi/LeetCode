/**
 * 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
 * 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let arr = []
  nums.sort((a, b) => {
    return a - b
  })
  for(let i=0; i<nums.length; i++){
    let lastIndex = nums.lastIndexOf(nums[i])
    if(lastIndex - i + 1 > nums.length / 3){
      arr.push(nums[i])
      i = lastIndex
    }
  }
  return arr
};