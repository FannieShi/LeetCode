/**
 * 统计所有小于非负整数 n 的质数的数量。
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    for(var i=2; i<n; i++){
        let isPrime = true
        for(var j=2; j<=Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            count++
        }
    }
    return count
};