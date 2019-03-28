/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 你可以按任意顺序返回答案。
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    var result = A[0].split('')
    A.map(function(val, index){
        if(index !== 0){
            var valArr = val.split('')
            for(var i=result.length-1; i>=0; i--){
                if(valArr.indexOf(result[i]) < 0){
                    result.splice(i, 1)
                }else {
                    valArr.splice(valArr.indexOf(result[i]), 1)
                }
            }
        }
    })
    return result
};