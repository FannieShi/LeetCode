/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = []
    if(numRows === 0){ return arr }
    if(numRows >= 1) { arr.push([1]) }
    for(let i=1; i<numRows; i++){
        let arr2 = [1]
        for(let j=0; j<arr[i-1].length; j++){
            if(j === arr[i-1].length-1){
                arr2.push(arr[i-1][j])
            }else{
                arr2.push(arr[i-1][j]+arr[i-1][j+1])
            }
        }
        arr.push(arr2)
    }
    return arr
};