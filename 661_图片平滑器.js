/**
 * 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let N = JSON.parse(JSON.stringify(M))
  for(let i=0; i<M.length; i++){
    for(let j=0; j<M[i].length; j++){
      let count = 1
      let sum = M[i][j]
      if(M[i-1] && M[i-1][j-1] != undefined){
        sum += M[i-1][j-1]
        count++
      }
      if(M[i-1] && M[i-1][j] != undefined){
        sum += M[i-1][j]
        count++
      }
      if(M[i-1] && M[i-1][j+1] != undefined){
        sum += M[i-1][j+1]
        count++
      }
      if(M[i][j-1] != undefined){
        sum += M[i][j-1]
        count++
      }
      if(M[i][j+1] != undefined){
        sum += M[i][j+1]
        count++
      }
      if(M[i+1] && M[i+1][j-1] != undefined){
        sum += M[i+1][j-1]
        count++
      }
      if(M[i+1] && M[i+1][j] != undefined){
        sum += M[i+1][j]
        count++
      }
      if(M[i+1] && M[i+1][j+1] != undefined){
        sum += M[i+1][j+1]
        count++
      }
      N[i][j] = Math.floor(sum / count)
    }
  }
  return N
};