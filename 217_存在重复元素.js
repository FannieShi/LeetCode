/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newArr = nums.sort((a, b) => {
        return a-b
    });
    for(let i=0; i<newArr.length-1; i++){
        if(newArr[i] === newArr[i+1]){
            return true
        }
    }
    return false
};