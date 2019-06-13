/**
 * 给定一个密钥字符串S，只包含字母，数字以及 '-'（破折号）。N 个 '-' 将字符串分成了 N+1 组。给定一个数字 K，重新格式化字符串，除了第一个分组以外，每个分组要包含 K 个字符，第一个分组至少要包含 1 个字符。两个分组之间用 '-'（破折号）隔开，并且将所有的小写字母转换为大写字母。
 * 给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  let str = S.split('-').join('').toUpperCase()
  let remainder = str.length % K
  for(let i=str.length-2; i>=0; i--){
    if((i+1)%K == remainder){
      str = str.slice(0, i+1) + '-' + str.slice(i+1)
    }
  }
  return str
};