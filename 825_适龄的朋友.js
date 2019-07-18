/**
 * 人们会互相发送好友请求，现在给定一个包含有他们年龄的数组，ages[i] 表示第 i 个人的年龄。
 * 当满足以下条件时，A 不能给 B（A、B不为同一人）发送好友请求：
 * age[B] <= 0.5 * age[A] + 7
 * age[B] > age[A]
 * age[B] > 100 && age[A] < 100
 * 否则，A 可以给 B 发送好友请求。
 * 注意如果 A 向 B 发出了请求，不等于 B 也一定会向 A 发出请求。而且，人们不会给自己发送好友请求。 
 * 求总共会发出多少份好友请求?
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  ages.sort((a, b) => {
    return b - a
  })
  let count = 0
  for(let i=0,len=ages.length; i<len; i++){
    for(let j=i+1; j<len; j++){
      if(ages[i]*0.5 + 7 < ages[j]){
        count++
        if(ages[i] == ages[j]){ count++ }
      }else {
        break
      }
    }
  }
  return count
};