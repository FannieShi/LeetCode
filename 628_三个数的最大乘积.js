/**
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 * 比较三个最大的正数和最小的两个负数及最大正数的乘积即可
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort(function(a, b){
        return b - a
    })
    let len = nums.length
    return Math.max(nums[0]*nums[1]*nums[2], nums[0]*nums[len-2]*nums[len-1])
};