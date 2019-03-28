/**
 * 如果单词列表（words）中的一个单词包含牌照（licensePlate）中所有的字母，那么我们称之为完整词。在所有完整词中，最短的单词我们称之为最短完整词。
 * 单词在匹配牌照中的字母时不区分大小写，比如牌照中的 "P" 依然可以匹配单词中的 "p" 字母。
 * 我们保证一定存在一个最短完整词。当有多个单词都符合最短完整词的匹配条件时取单词列表中最靠前的一个。
 * 牌照中可能包含多个相同的字符，比如说：对于牌照 "PP"，单词 "pair" 无法匹配，但是 "supper" 可以匹配。
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    var licenseWord = []
    var returnWord = null
    for(var i=0; i<licensePlate.length; i++){
        var code = licensePlate[i].charCodeAt()
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            licenseWord.push(licensePlate[i].toLowerCase())
        }
    }
    for(var i=0; i<words.length; i++){
        var word = words[i].split('')
        var copyLicenseWord = JSON.parse(JSON.stringify(licenseWord))
        for(var j=copyLicenseWord.length-1; j>=0; j--){
            var index = word.indexOf(copyLicenseWord[j])
            if(index > -1){
                word.splice(index, 1)
                copyLicenseWord.splice(j, 1)
            }
            if(copyLicenseWord.length === 0){
                if((returnWord !== null && words[i].length < returnWord.length) || returnWord === null){
                    returnWord = words[i]
                }
            }
        }
    }
    return returnWord
};

