/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 要求使用空间复杂度为 O(1) 的原地算法。
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let a = k % nums.length
    for(var i=0; i<a; i++){
        let last = nums.pop();
        nums.unshift(last);
    }
};