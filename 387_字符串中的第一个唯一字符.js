/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 您可以假定该字符串只包含小写字母。
 * @param {string} s
 * @return {number}
 */

//解法1
var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++){
        let j= s.charAt(i);
        let left = s.indexOf(j, i+1)
        let right = s.lastIndexOf(j, i-1);
        if((left < 0 || left ===i) && (right < 0 || right === i)){
            return i
        }
    }
    return -1
};

//解法2，会超时
var firstUniqChar = function(s) {
    for(let i=0; i<s.length; i++){
        let j= s.charAt(i);
        if(s.split(j).length === 2){
            return i
        }
    }
    return -1
};