/**
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
 * 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums = nums.sort((a, b) => {
        let strA = a.toString();
        let strB = b.toString();
        if (strA.length === strB.length){
            return b - a;
        }else if(strA.charAt(0) !== strB.charAt(0)) {
            return strB.charAt(0) - strA.charAt(0)
        }else if(strA.length > strB.length){
            return strA.charAt(0) - strA.charAt(strB.length)
        }else if(strA.length < strB.length){
            return strB.charAt(0) - strB.charAt(strA.length)
        }
    })
    return nums.join('')
}
