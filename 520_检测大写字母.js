/**
 * 给定一个单词，你需要判断单词的大写使用是否正确。
 * 我们定义，在以下情况时，单词的大写用法是正确的：
 * 1.全部字母都是大写，比如"USA"。
 * 2.单词中所有字母都不是大写，比如"leetcode"。
 * 3.如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word.length === 1){
        return true
    }
    var hasUpper = false
    var hasLower = false
    var isZeroLower = word[0].charCodeAt() >= 97 && word[0].charCodeAt() <= 122 ? true : false
    word.split('').map(function(val, index){
        var code = val.charCodeAt()
        if(code >= 65 && code <= 90 && index !== 0){
            if(!hasUpper){
                hasUpper = true
            }
        }else if(code >= 97 && code <= 122 && index !== 0){
            if(!hasLower){
                hasLower = true
            }
        }
    })
    return hasLower && !hasUpper || !hasLower && hasUpper && !isZeroLower
};