/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = []
  s = s.split('')
  for(let i=0; i<s.length; i++){
    if(s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' || s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u'){
      arr.unshift(s[i])
    }
  }
  for(let i=0; i<s.length; i++){
    if(s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' || s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u'){
      s[i] = arr[0]
      arr.shift()
    }
  }
  return s.join('')
};