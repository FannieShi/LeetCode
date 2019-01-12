/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * 我们可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let num = [];
    nums1.map(currentVal => {
        if(nums2.indexOf(currentVal) > -1){
            num.push(currentVal)
            nums2.splice(nums2.indexOf(currentVal), 1)
        }
    })
    return num
};