/**
 * 如果数组是单调递增或单调递减的，那么它是单调的。
 * 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
 * 当给定的数组 A 是单调数组时返回 true，否则返回 false。
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length === 1){
        return true
    }
    for(var i=0; i<A.length-1; i++){
        if(A[i] !== A[i+1] && A[0] === A[A.length-1]){
            return false
        }else if(A[i] > A[i+1] && A[0] < A[A.length-1]){
            return false
        }else if(A[i] < A[i+1] && A[0] > A[A.length-1]){
            return false
        }
    }
    return true
};