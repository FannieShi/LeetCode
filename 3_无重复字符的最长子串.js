/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = s.split('')
    let result = [];
    let maxLen = 0
    for(let i=0; i<arr.length; i++){
        if(result.indexOf(arr[i]) > -1){
            result.shift()
            i = i - 1
            continue
        }
        result.push(arr[i])
        if(maxLen < result.length){
            maxLen = result.length
        }
    }
    return maxLen
};