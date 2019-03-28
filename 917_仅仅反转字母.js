/**
 * 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    var count = 0;
    var arr = [];
    var SArr = S.split('')
    for(var i=0; i<S.length; i++){
        var code = S[i].charCodeAt()
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            arr.push(S[i])
        }
    }
    var arr2 = arr.reverse()
    for(var i=0; i<SArr.length; i++){
        var code = S[i].charCodeAt()
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            SArr.splice(i, 1, arr2[count])
            count++
        }
    }
    return SArr.join('')
};