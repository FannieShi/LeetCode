/**
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。
 * 禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  banned = banned.map(item => item.toLowerCase())
  let obj = {}
  let maxCount = 0
  paragraph.split(/[!?',;.\n\s]/).forEach((item, index) => {
    let prop =  item.toLowerCase()
    if(banned.indexOf(prop) == -1 && prop != ''){
      if(obj[prop] == undefined){
        obj[prop] = 1
      }else {
        obj[prop]++
      }
      if(obj[prop]> maxCount)
        maxCount = Math.max(maxCount, obj[prop])
    }
  })
  for(let i in obj){
    if(obj[i] == maxCount){
      return i
    }
  }
};