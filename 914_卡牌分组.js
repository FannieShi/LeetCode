/**
 * 给定一副牌，每张牌上都写着一个整数。
 * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 * 每组都有 X 张牌。
 * 组内所有的牌上都写着相同的整数。
 * 仅当你可选的 X >= 2 时返回 true。
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let count = []
  deck.forEach(item => {
    if(count[item] != undefined){
      count[item]++
    }else {
      count[item] = 1
    }
  })
  const min = count.sort((a, b) =>{
    return a - b
  })[0]
  if(min < 2) { return false }
  let getResult = (a, b) => {
    if(b === 0)  return a;
    return getResult(b, a % b)
  }
  for(let i=1; i<count.length; i++){
    if(count[i] && getResult(count[i], min) === 1){
      return false
    }
  }
  return true
};