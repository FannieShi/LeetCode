
var RecentCounter = function() {
  this.history = []
};

/**
 * 写一个 RecentCounter 类来计算最近的请求。
 * 它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。
 * 返回从 3000 毫秒前到现在的 ping 数。
 * 任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。
 * 保证每次对 ping 的调用都使用比之前更大的 t 值。
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.history.push(t)
  while(this.history[0] < t - 3000){
    this.history.shift()
  }
  return this.history.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */