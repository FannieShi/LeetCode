/**
 * 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
 * 你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.nums = nums.sort((a, b) => {
    return b - a
  })
  this.k = k
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if(val > this.nums[this.k - 1] && this.nums.length >= this.k){
    for(let i=0; i<this.k; i++){
      if(val>this.nums[i]){
        this.nums.splice(i, 0, val)
        break;
      }
    }
  }else if(this.nums.length < this.k){
    for(let i=0; i<this.k; i++){
      if(val>this.nums[i] || this.nums[i] == undefined){
        this.nums.splice(i, 0, val)
        break;
      }
    }
  }
  return this.nums[this.k - 1]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */