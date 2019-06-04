/**
 * 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
 * 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
 * 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
 * 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let arr = []
  let flag = false
  for(let i=0; i<S.length; i++){
    if(!flag){
      flag = true
      arr[arr.length] = S.charAt(i)
    }else {
      arr[arr.length - 1] += S.charAt(i)
      let str = arr[arr.length - 1]
      if(str.length % 2 == 0){
        let leftCount = 0
        let rightCount = 0
        str.split('').map((val, index) => {
          if(val == '('){
            leftCount++
          }else if(val == ')'){
            rightCount++
          }
        })
        if(leftCount == rightCount && str.charAt(0) == '(' && str.charAt(str.length - 1) == ')'){
          flag = false
        }
      }

    }
  }
  arr.forEach((val, index) => {
    arr[index] = val.slice(1, val.length-1)
  })
  return arr.join('')
};