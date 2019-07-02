/**
 * 我们有一个项的集合，其中第 i 项的值为 values[i]，标签为 labels[i]。
 * 我们从这些项中选出一个子集 S，这样一来：
 * |S| <= num_wanted
 * 对于任意的标签 L，子集 S 中标签为 L 的项的数目总满足 <= use_limit。
 * 返回子集 S 的最大可能的 和。
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
  let res = 0,
    obj = {},
    arr = []
  for(let i=0; i<labels.length; i++){
    if(obj[labels[i]] == undefined){
      obj[labels[i]] = []
    }
    let item =  obj[labels[i]]
    if(item.length < use_limit){
      item.push(values[i])
    }else {
      item.sort((a, b) => {
        return a - b
      })
      if(values[i] > item[0]){
        item.splice(0, 1, values[i])
      }
    }
  }
  for(let i in obj){
    arr.push(...obj[i])
  }
  arr.sort((a, b) => {
    return b - a
  })
  for(let i=0; i<num_wanted; i++){
    res += arr[i] ? arr[i] : 0
  }
  return res
};