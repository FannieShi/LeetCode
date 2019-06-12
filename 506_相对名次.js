/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let arr = JSON.parse(JSON.stringify(nums))
  arr.sort((a, b) => {
    return b - a
  })
  arr.forEach((item, index) => {
    let i = nums.indexOf(item)
    if(index == 0){
      nums[i] = "Gold Medal"
    }else if(index == 1){
      nums[i] = "Silver Medal"
    }else if(index == 2){
      nums[i] = "Bronze Medal"
    }else {
      nums[i] = index + 1 + ''
    }
  })
  return nums
};