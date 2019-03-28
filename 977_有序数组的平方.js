/**
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    var result = []
    A.map(function(val){
        result.push(val*val)
    })
    result = result.sort(function(a,b){
        return a - b
    })
    return result
};