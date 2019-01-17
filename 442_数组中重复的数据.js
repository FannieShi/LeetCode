/**
 * 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
 * 找到所有出现两次的元素。
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    nums = nums.sort((a, b) => {
        return a - b
    });
    for(let i=nums.length - 1; i>=0; i--){
        if(nums[i] !== nums[i-1]){
            nums.splice(i, 1)
        }
    }
    return nums
};