/**
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 * 无空格字符构成一个单词。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let arr = str.split(' ').reverse();
    let arr2 = [];
    arr.map((currentVal) => {
        if(currentVal.trim().length > 0){
            arr2.push(currentVal)
        }
    });
    return arr2.join(' ')
};