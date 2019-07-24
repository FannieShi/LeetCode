/**
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const res = [],
    obj = {}
  arr1.forEach(val => {
    if(obj[val] == undefined){
      obj[val] = 1
    }else {
      obj[val]++
    }
  })
  arr2.forEach(val => {
    while(obj[val]){
      res.push(val)
      obj[val]--
    }
    delete obj[val]
  })
  arr1 = []
  for(let i in obj){
    while(obj[i]){
      arr1.push(Number(i))
      obj[i]--
    }
    delete obj[i]
  }
  arr1.sort((a, b) => {
    return a - b
  })
  return res.concat(arr1)
};