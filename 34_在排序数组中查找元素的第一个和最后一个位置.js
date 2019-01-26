/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let arr = []
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] === target && ((nums[mid-1] < target && mid > left) || mid === left)){
            arr.push(mid)
            for(let i=mid; i<nums.length; i++){
                if(nums[i] === target && ((nums[i+1] !== target && i<nums.length-1) || i=== nums.length -1)){
                    arr.push(i)
                    return arr
                }
            }
            break
        }else if(nums[mid] < target){
            left = mid + 1
        }else {
            right = mid -1
        }
    }
    return [-1, -1]
};