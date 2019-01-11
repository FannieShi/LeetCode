/**
 * 编写一个函数，其作用是将输入的字符串反转过来。
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
};