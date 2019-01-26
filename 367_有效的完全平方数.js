/**
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 不要使用任何内置的库函数，如  sqrt。
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num;
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(mid === num/mid){
            return true
        }else if(mid < num/mid){
            left = mid + 1
        }else {
            right = mid - 1
        }
    }
    return false
};