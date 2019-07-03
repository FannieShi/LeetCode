/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i=0; i<matrix.length; i++){
        let temp = matrix[i]
        if(target>temp[temp.length-1]){
            continue
        }else if(target<temp[0]){
            return false
        }else {
            return temp.includes(target)
        }
    }
    return false
};