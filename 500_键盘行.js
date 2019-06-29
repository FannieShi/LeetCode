/**
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let set1 = new Set(['Q','W','E','R','T','Y','U','I','O','P'])
  let set2 = new Set(['A','S','D','F','G','H','J','K','L'])
  let set3 = new Set(['Z','X','C','V','B','N','M'])
  for(let i=0; i<words.length; i++){
    let word = words[i].toUpperCase()
    let set = set1.has(word[0]) ? set1
      : set2.has(word[0]) ? set2
        : set3.has(word[0]) ? set3
          : undefined
    let flag = word.split('').every(item => set.has(item))
    if(!flag){
      words.splice(i--, 1)
    }
  }
  return words
};