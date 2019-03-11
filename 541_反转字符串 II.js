/**
 * 给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var end = 0
    var start = 0
    var s2 = '';
    for(var i=0; i<s.length; i++){
        if((i+1)%(2*k) === 0 && i !== 0 || i + 1 === s.length){
            end = start + k
            var str = s.slice(start, end).split('').reverse().join('')
            var str2 = s.slice(end, i+1)
            s2  = s2.concat(str, str2)
            start = i + 1
        }
    }
    return s2
};