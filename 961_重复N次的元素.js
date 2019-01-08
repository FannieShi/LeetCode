/**
 * 在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
 * 返回重复了 N 次的那个元素。
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let sortA = A.sort((a,b) => {
        return a-b;
    });
    for(let i=0; i<sortA.length/2 + 1; i++){
        if(sortA[i] === sortA[i+1]){
            return sortA[i]
        }
    }
};