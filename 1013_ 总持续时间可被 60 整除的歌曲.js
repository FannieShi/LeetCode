/**
 * 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
 * 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字  i < j 且有 (time[i] + time[j]) % 60 == 0。
 * @param {number[]} time
 * @return {number}
 */
//方法1
var numPairsDivisibleBy60 = function(time) {
    var count = 0;
    for(var i=0; i<time.length-1; i++){
        for(var j=i+1; j<time.length; j++){
            if((time[i]+time[j]) % 60 === 0){
                count ++
            }
        }
    }
    return count
};

//方法2
var numPairsDivisibleBy602 = function(time) {
    var count = 0;
    time.map(function(val, index){
        time[index] = val % 60
    })
    for(var i=0; i<time.length; i++){
        var foundIndex = function(index){
            var ind = time.indexOf((60-time[i]) % 60, index)
            if(ind > -1){
                count ++
                foundIndex( ind + 1)
            }
        }
        foundIndex(i+1)
    }
    return count
};