/**
 * 一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。
 * 给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。
 * 接下来会给出一组访问次数和域名组合的列表cpdomains 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let obj = {}
  cpdomains.forEach((item, index) => {
    let arr = item.split(/[.\n\s]/)
    let count = parseInt(arr[0])
    let prop1 = arr[arr.length-1]
    let prop2 = arr[arr.length-2] + '.' + arr[arr.length-1]
    obj[prop1] = obj[prop1] != undefined ? obj[prop1] + count : count
    obj[prop2] = obj[prop2] != undefined ? obj[prop2] + count : count
    if(arr.length == 4){
      let prop3 = arr[1] + '.' + arr[2] + '.' + arr[3]
      obj[prop3] = obj[prop3] != undefined ? obj[prop3] + count : count
    }
  })
  let res = []
  for(let i in obj){
    res.push(obj[i] + ' ' + i)
  }
  return res
};