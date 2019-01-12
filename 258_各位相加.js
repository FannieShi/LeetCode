/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num > 9){
        let str = num.toString();
        let res = 0;
        for(let i=0; i<str.length; i++){
            res += Number(str.charAt(i))
        }
        num = res
    }
    return num
};