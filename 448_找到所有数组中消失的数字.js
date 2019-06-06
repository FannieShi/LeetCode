/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 * @param {number[]} nums
 * @return {number[]}
 */
//方法1，通过将数变成负数，既能做标记，但又保留对更改之前的数字的回溯
var findDisappearedNumbers = function(nums) {
  nums.forEach(val => {
    nums[Math.abs(val) - 1] = - Math.abs(nums[Math.abs(val) - 1])
  })
  let arr = []
  nums.forEach((val, index) => {
    if(val > 0){
      arr.push(index + 1)
    }
  })
  return arr
};

var findDisappearedNumbers = function(nums) {
  let arr = []
  nums.sort((a, b) => {
    return a - b
  }).forEach((val, index) => {
    let a = index == 0 ?  val - 1 : val - nums[index - 1] - 1
    if(index == nums.length - 1){
      b = index + 1 - val
      for(let j=0; j< b; j++){
        arr.push(val + 1 + j)
      }
    }
    for(let i=0; i<a; i++){
      if(index == 0){
        arr.push(1 + i)
      }else {
        arr.push(nums[index - 1] + 1 + i)
      }
    }
  })
  return arr
};