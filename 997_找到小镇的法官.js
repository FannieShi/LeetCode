/**
 * 在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。
 * 如果小镇的法官真的存在，那么：
 * 小镇的法官不相信任何人。
 * 每个人（除了小镇法官外）都信任小镇的法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。
 * 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  if(N==1 && trust.length == 0){ return 1}
  let arr = new Array(N)
  for(let i=trust.length-1; i>=0; i--){
    let outIndex = trust[i][0] - 1
    let inIndex = trust[i][1] - 1
    if(arr[outIndex] == undefined){
      arr[outIndex] = {
        outCount: 0,
        inCount: 0
      }
    }
    arr[outIndex].outCount++
    if(arr[inIndex] == undefined){
      arr[inIndex] = {
        outCount: 0,
        inCount: 0
      }
    }
    arr[inIndex].inCount++
  }
  for(let i=arr.length-1; i>=0; i--){
    if(arr[i] != undefined && arr[i].outCount == 0 && arr[i].inCount == N-1){
      return i+1
    }
  }
  return -1

};