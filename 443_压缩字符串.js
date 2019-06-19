/**
 * 给定一组字符，使用原地算法将其压缩。
 * 压缩后的长度必须始终小于或等于原数组长度。
 * 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。
 * 在完成原地修改输入数组后，返回数组的新长度。
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  for(let i=0; i<chars.length; i++){
    for(let j=i; j<chars.length; j++){
      if(chars[j] != chars[i]){
        if(j-i > 1){
          let diff = j - i + ''
          chars.splice(i+1, j-i-1)
          for(let k=0; k<diff.length; k++){
            chars.splice(i+1+k, 0, diff[k])
          }
          i = i + diff.length
        }
        break
      }else if(chars[j] == chars[i] && j == chars.length - 1 && j != i){
        let diff = j - i + 1 + ''
        chars.splice(i+1, j-i)
        for(let k=0; k<diff.length; k++){
          chars.splice(i+1+k, 0, diff[k])
        }
        i = i + diff.length
      }
    }
  }
};