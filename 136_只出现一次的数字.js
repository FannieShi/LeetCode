/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let newArr = nums.sort((a, b) => {
        return a - b;
    });

    for(let i=0; i<newArr.length; i++) {
        if(i === 0 && newArr[i] !== newArr[i+1]){
            return newArr[i]
        }else if(i === newArr.length-1 && newArr[i] !== newArr[i-1]) {
            return newArr[i]
        }else if(newArr[i] !== newArr[i-1] && newArr[i] !==newArr[i+1]){
            return newArr[i]
        }
    }
};