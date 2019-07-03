/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let temp = []
  matrix.forEach((item, index) => {
    for(let i=0; i<item.length; i++){
      if(item[i] == 0){
        temp.push([index, i])
      }
    }
  })
  temp.forEach((item, index) => {
    let [x, y] = item
    for(let i=0; i<matrix[x].length; i++){
      matrix[x][i] = 0
    }
    for(let i=0; i<matrix.length; i++){
      matrix[i][y] = 0
    }
  })
  return matrix
};