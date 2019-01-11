/**
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let newArr = nums.sort((a, b) => {
        return a - b
    });

    if(newArr[0] !== 0){
        return 0
    }
    if(newArr[newArr.length-1] !== newArr.length){
        return newArr.length
    }
    for(let i=0; i<newArr.length - 1; i++){
        if(newArr[i] === newArr[i+1] - 2 ){
            return i  + 1
        }
    }
};