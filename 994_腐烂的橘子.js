/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let stack = []
  let count = 0
  let total = 0
  for(let i=0, len=grid.length; i<len; i++){
    for(let j=0, len=grid[i].length; j<len; j++){
      if(grid[i][j] == 2){
        stack.push({
          x: i,
          y: j
        })
      }
      if(grid[i][j] == 0){ total++ }
    }
  }
  total = grid.length * grid[0].length - total
  while(stack.length != total){
    let temp = [...stack]
    for(let i=stack.length-1; i>=0; i--){
      let x = stack[i].x,
        y = stack[i].y
      if(grid[x-1] != undefined && grid[x-1][y] == 1){
        grid[x-1][y] = 2
        temp.push({
          x: x-1,
          y: y
        })
      }
      if(grid[x+1] != undefined && grid[x+1][y] == 1){
        grid[x+1][y] = 2
        temp.push({
          x: x+1,
          y: y
        })
      }
      if(grid[x][y-1] == 1){
        grid[x][y-1] = 2
        temp.push({
          x: x,
          y: y-1
        })
      }
      if(grid[x][y+1] == 1){
        grid[x][y+1] = 2
        temp.push({
          x: x,
          y: y+1
        })
      }
    }
    if(temp.length == stack.length){
      return -1
    }
    stack = temp
    count++
  }
  return count
};