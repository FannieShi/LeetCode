/**
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums
  this.sum = 0
  this.nums.forEach(item => {
    this.sum += item
  })
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  j = Math.min(j, this.nums.length - 1)
  if(j - i + 1 > this.nums.length/2){
    let sum = this.sum
    for(let c=0; c<i; c++){
      sum -= this.nums[c]
    }
    for(let c=this.nums.length - 1; c>j; c--){
      sum -= this.nums[c]
    }
    return sum
  }else {
    let sum = 0
    for(let a=i; a<=j; a++){
      sum += this.nums[a]
    }
    return sum
  }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */