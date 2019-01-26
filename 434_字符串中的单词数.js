/**
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr = s.split(' ');
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i].trim().length === 0){
            arr.splice(i, 1)
        }
    }
    return arr.length
};