/**
 * 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var countArr = []
    var maxCount = 0
    var valArr = []
    var result = 1
    for(var i=0; i<nums.length; i++){
        var index = null;
        countArr.map(function(currentVal, currentIndex){
            if(currentVal.num === nums[i]){
                index = currentIndex
            }
        })
        if(index !== null){
            countArr[index].count ++
            maxCount = Math.max(countArr[index].count, maxCount)
        }else {
            countArr.push({
                num: nums[i],
                count: 1
            })
        }
    }
    if(maxCount === 1){
        return 1
    }
    countArr.map(function(currentVal){
        if(currentVal.count === maxCount){
            valArr.push(currentVal.num)
        }
    })
    valArr.map(function(currentVal){
        var res = nums.lastIndexOf(currentVal) - nums.indexOf(currentVal) + 1
        result = result !== 1 ? Math.min(res, result) : res
    })
    return result
};