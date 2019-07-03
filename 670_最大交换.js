/**
 * 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let max = num.toString().split('').sort((a, b) => {
    return b-a
  })
  if(Number(max.join(''))==num){  return num }
  num = num.toString().split('')
  for(let i=0, len=num.length; i<len; i++){
    if(num[i]!=max[i]){
      let index = num.lastIndexOf(max[i]),
        temp = num[index]
      num[index] = num[i]
      num[i] = temp
      return Number(num.join(''))
    }
  }
};