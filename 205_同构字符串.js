/**
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let arr1 = []
    let arr2 = []
    for(let i=0; i<s.length; i++){
        let index = 0
        let exist = arr1.some((obj, ind) => {
            if(obj.letter === s[i]){
                index = ind
                return true
            }else {
                return false
            }
        })
        if(!exist){
            arr1.push({
                letter: s[i],
                indexs: [i]
            })
        }else {
            arr1[index].indexs.push(i)
        }
    }

    for(let i=0; i<t.length; i++){
        let index = 0
        let exist = arr2.some((obj, ind) => {
            if(obj.letter === t[i]){
                index = ind
                return true
            }else {
                return false
            }
        })
        if(!exist){
            arr2.push({
                letter: t[i],
                indexs: [i]
            })
        }else {
            arr2[index].indexs.push(i)
        }
    }
    console.log(arr1)
    console.log(arr2)
    if(arr1.length === arr2.length){
        return arr1.every((obj, index) => {
            return obj.indexs.join(',') === arr2[index].indexs.join(',')
        })
    }else {
        return false
    }
};