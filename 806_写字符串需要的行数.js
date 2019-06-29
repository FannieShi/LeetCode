/**
 * 我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 widths ，这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。
 * 现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回。
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
  let queryObj = {}
  let str = 'abcdefghijklmnopqrstuvwxyz'
  widths.forEach((item, index) => {
    queryObj[str[index]] = item
  })
  let res = [1, 0]
  for(let i of S){
    if(res[1] + queryObj[i] > 100){
      res[0]++
      res[1] = 0
    }
    res[1] += queryObj[i]
  }
  return res
};