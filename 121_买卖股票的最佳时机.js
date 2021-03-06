/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length == 0){
    return 0
  }
  let min = prices[0]
  let max = 0
  for(let i=1; i<prices.length; i++){
    max = Math.max(max, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return max
};