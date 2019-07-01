/**
 * 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。
 * 给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
  let x = points[0][0] - points[1][0]
  let y = points[0][1] - points[1][1]
  if(x==0&&y==0){ return false }
  let x2 = points[2][0] - points[0][0]
  let y2 = points[2][1] - points[0][1]
  if(x2/x == y2/y || x==0&&x2==0 || y==0&&y2==0){
    return false
  }
  return true
};