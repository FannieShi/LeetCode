/**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let prev = S.indexOf(C),
    next = S.length
  let res = Array.from(S).map((item, index) => {
    if(item == C){
      prev = index
      next = S.indexOf(C, index+1)
      return 0
    }else {
      return Math.min(Math.abs(prev-index), Math.abs(next-index))
    }
  })
  return res
};