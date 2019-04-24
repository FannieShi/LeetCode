/**
 * 在一个给定的数组nums中，总是存在一个最大元素 。
 * 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
 * 如果是，则返回最大元素的索引，否则返回-1。
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var arr = JSON.parse(JSON.stringify(nums))
    nums.sort(function(a, b){
        return b - a
    })
    if(nums[0] >= nums[1]*2 && nums.length > 1 || nums.length === 1){
        return arr.indexOf(nums[0])
    }else {
        return -1
    }
};