/**
 * 在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。
 * 例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
 * 我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。
 * 最终结果按照字典顺序输出。
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
  let arr = []
  for(let i=0; i<S.length; i++){
    for(let j=i+1; j<S.length; j++){
      if(S[i] != S[j]){
        if(j - i >= 3){
          arr.push([i, j-1])
        }
        i = j - 1
        break
      }else if(j==S.length-1){
        if(j - i >= 2){
          arr.push([i, j])
        }
        i = j
      }
    }
  }
  return arr
};