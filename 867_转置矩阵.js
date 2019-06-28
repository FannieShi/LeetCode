/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
 * 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let xLen = A.length,
    yLen = A[0].length,
    maxLen = Math.max(xLen, yLen)
  for(let i=0; i<maxLen; i++){
    if(A[i] == undefined){ A[i] = [] }
    for(let j=0; j<i; j++){
      [A[i][j], A[j][i]] = [A[j][i], A[i][j]]
    }
  }
  A.length = yLen
  if(xLen < yLen){
    for(let i=0; i<yLen; i++){
      A[i].length = xLen
    }
  }
  return A
};