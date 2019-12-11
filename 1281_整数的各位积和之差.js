/**
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let sum = 0
  let product = 1
  n.toString().split('').forEach(item => {
    sum += parseInt(item)
    product *= parseInt(item)
  })
  return product - sum
};