/**
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        let sum = digits[i] + 1;
        if(sum < 10){
            digits[i] = sum
            return digits
        }else {
            digits[i] = sum % 10;
            if(i===0){
                digits.unshift(1)
                return digits
            }
        }
    }
};