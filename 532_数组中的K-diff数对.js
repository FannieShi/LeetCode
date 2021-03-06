/**
 * 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let set = new Set(nums)
  let arr = [...set]
  let count = 0
  if(k < 0){
    return 0
  }
  arr.forEach(item => {
    if((set.has(item + k) && k != 0) || (nums.indexOf(item) != nums.lastIndexOf(item) && k == 0)){
      count ++
    }
  })
  return count
};