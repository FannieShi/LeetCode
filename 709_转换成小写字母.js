/**
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    var arr = []
    for(var i=0; i<str.length; i++){
        var code = str[i].charCodeAt();
        if(code >= 65 && code <= 90){
            code += 32
        }
        arr.push(code)
    }
    return String.fromCharCode(...arr)
};