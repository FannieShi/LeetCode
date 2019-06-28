/**
 * 3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。
 * 给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let count = 0
  for(let i=1; i<grid.length-1; i++){
    for(let j=1; j<grid[0].length-1; j++){
      if(grid[i][j] == 5){
        let set = new Set()
        for(let x=i-1; x<=i+1; x++){
          for(let y=j-1; y<=j+1; y++){
            if(grid[x][y]< 10 && grid[x][y] > 0){
              set.add(grid[x][y])
            }
          }
        }
        if(set.size == 9 &&
          grid[i-1][j-1] + grid[i][j-1] + grid[i+1][j-1] == 15 &&
          grid[i-1][j] + grid[i][j] + grid[i+1][j] == 15 &&
          grid[i-1][j+1] + grid[i][j+1] + grid[i+1][j+1] == 15 &&
          grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1] == 15 &&
          grid[i][j-1] + grid[i][j] + grid[i][j+1] == 15 &&
          grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1] == 15 &&
          grid[i-1][j-1] + grid[i][j] + grid[i+1][j+1] == 15 &&
          grid[i-1][j+1] + grid[i][j] + grid[i+1][j-1] == 15){
          count++
        }
      }
    }
  }
  return count
};