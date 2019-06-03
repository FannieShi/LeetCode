/**
 * 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。
 * 请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  var arr = JSON.parse(JSON.stringify(heights))
  heights.sort((a, b) => {
    return a - b
  })
  var count = 0
  arr.forEach((val, index) => {
    if(val != heights[index]){
      count ++
    }
  })
  return count
};