/**
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <=1){
        return false
    }
    for(var i=0; i<nums.length; i++){
        var a = nums.length - 1 - i > k ? k : nums.length - 1 - i
        for(var j=i+1; j<=i+a; j++){
            if(nums[i] === nums[j]){
                return true
            }
        }
    }
    return false
};