/**
 * 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(nums.length <=2){
        return true
    }
    var count = 0
    for(var i=0; i<nums.length - 1; i++){
        if(nums[i] > nums[i+1]){
            count ++
            if(i!==0 && i!==nums.length-2 && nums[i-1] > nums[i+1] && nums[i] > nums[i+2]){
                return false
            }
        }
    }
    return count <= 1 ? true : false
};