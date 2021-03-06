/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        let numA = nums[i];
        let numB = target - numA;
        if(nums.indexOf(numB, i+1) > -1){
            let i2 = nums.indexOf(numB, i+1)
            return [i, i2];
        }
    }
};