/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//第一种方法：粗暴查找
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if(index > -1){
        return index
    }else {
        nums.push(target)
        nums = nums.sort((a, b) => {
            return a - b;
        })
        return nums.indexOf(target)
    }
};

//二分查找法
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    if(nums[right] < target){
        return right + 1
    }else {
        return left
    }
};