/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for(let i=0; i<matrix.length; i++){
    let temp=matrix[i]
    if(target < temp[0]){
      return false
    }else if(target > temp[temp.length-1] || !temp.includes(target)){
      continue
    }else  {
      return true
    }
  }
  return false
};