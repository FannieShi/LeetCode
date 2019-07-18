/**
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
  this.sum = 0
  nums.forEach(val => {
    this.sum += val
  })
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.sum = this.sum - this.nums[i] + val
  this.nums.splice(i, 1, val)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if(i==0 && j==this.nums.length-1){
    return this.sum
  }
  let sum = 0
  for(let a=i; a<=j; a++){
    sum += this.nums[a]
  }
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */