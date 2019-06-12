/**
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案。
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let indexSum = null
  let result = []
  let mapList = list1.length > list2.length ? list1 : list2
  let setList = list1.length > list2.length ? list2 : list1
  let set = new Set(setList)
  for(let i=0; i<mapList.length; i++){
    if(set.has(mapList[i])){
      if(result.length == 0){
        result = [mapList[i]]
        indexSum = i + setList.indexOf(mapList[i])
      }else {
        let sum = i + setList.indexOf(mapList[i])
        if(sum < indexSum){
          indexSum = sum
          result = [mapList[i]]
        }else if(sum == indexSum){
          result.push(mapList[i])
        }
      }
    }
  }
  return result
};