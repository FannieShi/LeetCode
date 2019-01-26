/**
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * @param {number} n
 * @return {boolean}
 */
//解法1，位运算
var isPowerOfTwo = function(n) {
    if(n<=0){
        return false
    }
    if((n&n-1) == 0){
        return true
    }
    return false
};
//解法2
var isPowerOfTwo = function(n) {
    while(n>=1){
        if(n===1){
            return true
        }else {
            n = n/2
        }
    }
    return false
};