/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    while(num1.length > num2.length){
        num2 = '0' + num2
    }
    while(num1.length < num2.length){
        num1 = '0' + num1
    }
    let flag = 0;
    let result = ''
    for(let i=num1.length-1; i>=0; i--){
        let sum = (num1.charAt(i) - '0') + (num2.charAt(i) - '0') + flag
        result = sum%10 + result
        if(sum >=10){
            flag = 1
            if(i === 0){
                result = 1 + result
            }
        }else {
            flag = 0
        }
    }
    return result
};