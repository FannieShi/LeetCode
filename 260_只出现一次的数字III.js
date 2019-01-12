/**
 * 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
 * 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let arr = [];
    nums = nums.sort((a, b) => {
        return a - b
    })
    for(let i=0; i<nums.length; i++){
        if((i===0 && nums[0] !== nums[1]) || (i===nums.length-1 && nums[nums.length-1]!==nums[nums.length-2]) || (i !== 0 && i !=nums.length-1 && nums[i] !== nums[i+1] && nums[i] !== nums[i-1])){
            arr.push(nums[i])
        }
        if(arr.length === 2){
            return arr
        }
    }
};