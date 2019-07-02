/**
 * 我们对 0 到 255 之间的整数进行采样，并将结果存储在数组 count 中：count[k] 就是整数 k 的采样个数。
 * 我们以 浮点数 数组的形式，分别返回样本的最小值、最大值、平均值、中位数和众数。其中，众数是保证唯一的。
 * 我们先来回顾一下中位数的知识：
 * 如果样本中的元素有序，并且元素数量为奇数时，中位数为最中间的那个元素；
 * 如果样本中的元素有序，并且元素数量为偶数时，中位数为中间的两个元素的平均值。
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
  let res = new Array(5),
    arrSum = 0,
    maxCount = 0,
    length = 0
  count.forEach((item, index) => {
    arrSum += item * index
    length += item
    if(item > 0){
      res[1] = index
      count[index] = length
      if(res[0] == undefined){
        res[0] = index
      }
    }
    if(item > maxCount){
      res[4] = index
      maxCount = item
    }

  })
  res[2] = arrSum/length
  let index = count.findIndex(item => {
    if(length%2 == 0){
      return item >= length/2
    }else {
      return item >= (length + 1)/2
    }
  })
  if(length%2 == 0 && count[index] < length/2 + 1){
    for(let i=index; i<count.length; i++){
      if(count[i] >= length/2 + 1){
        res[3] = (index + i)/2
        break
      }
    }
  }else {
    res[3] = index
  }
  return res
};