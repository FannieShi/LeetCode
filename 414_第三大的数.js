/**
 * 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let arr = []
  nums.forEach(item => {
    if(arr.length < 3 && arr.indexOf(item) < 0){
      arr.push(item)
    }else {
      arr.sort((a, b) => {
        return a - b
      })
      if(item > arr[0] && arr.indexOf(item) < 0){
        arr.splice(0, 1, item)
      }
    }
  })
  arr.sort((a, b) => {
    return b - a
  })
  return arr.length < 3 ? arr[0] : arr[2]
};