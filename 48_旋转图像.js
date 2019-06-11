/**
 * 给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
 * 说明：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 */
var rotate = function(matrix) {
  let n = matrix.length
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      matrix[j][2*n - i - 1] = matrix[i][j]
    }
  }
  for(let i=0; i<n; i++){
    matrix[i].splice(0, n)
  }
};