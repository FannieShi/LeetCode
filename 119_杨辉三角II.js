/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * k为0时，输出第一行
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = []
    let arr2 = []
    for(let i=0; i<=rowIndex; i++){
        for(let j=1; j<arr.length; j++){
            arr2[j] = arr[j] + arr[j-1]
        }
        arr2.push(1)
        arr2.map((currentVal, index) => {
            arr[index] = currentVal
        })
    }

    return arr
};