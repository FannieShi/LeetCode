/**
 * 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let arrS = []
  let arrT = []
  for(let i=0; i<S.length; i++){
    if(S[i] == '#' ){
      arrS.pop()
    }else {
      arrS.push(S[i])
    }
  }
  for(let i=0; i<T.length; i++){
    if(T[i] == '#' ){
      arrT.pop()
    }else {
      arrT.push(T[i])
    }
  }
  return arrS.join('') == arrT.join('')
};