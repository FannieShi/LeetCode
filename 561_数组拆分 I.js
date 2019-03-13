/**
 * 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var arr = nums.sort(function(a, b){
        return a - b
    })
    var sum = 0
    for(var i=0; i<arr.length; i++){
        if(i%2 === 0){
            sum += arr[i]
        }
    }
    return sum
};