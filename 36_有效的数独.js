/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      //第一条规则
      if(board[i][j] != '.' && board[i].indexOf(board[i][j], j+1) > j){
        return false
      }
      //第二条规则
      if(i == 0){
        let rule = board[0][j].concat(board[1][j], board[2][j], board[3][j], board[4][j], board[5][j], board[6][j], board[7][j], board[8][j])
        for(let c=0; c<rule.length; c++){
          if(rule[c] != '.' && rule.indexOf(rule[c], c+1) > c){
            return false
          }
        }
      }
      //第三条规则
      if(i % 3 == 0 && j % 3 == 0){
        let rule = board[i][j].concat(board[i][j+1], board[i][j+2], board[i+1][j], board[i+1][j+1], board[i+1][j+2], board[i+2][j], board[i+2][j+1], board[i+2][j+2])
        for(let c=0; c<rule.length; c++){
          if(rule[c] != '.' && rule.indexOf(rule[c], c+1) > c){
            return false
          }
        }
      }
    }
  }
  return true
};