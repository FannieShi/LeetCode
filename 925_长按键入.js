
/**
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(name === typed){
        return true
    }
    if(name.length > typed.length || name.charAt(0) !== typed.charAt(0) || name.charAt(name.length-1) !== typed.charAt(typed.length-1)){
        return false
    }

    let index = 0;
    for(var i=0; i<typed.length; i++){
        if(typed.charAt(i) === name.charAt(i-index)){
            continue
        }else if(typed.charAt(i) === name.charAt(i-index-1) && i!==0){
            index++
            continue
        }else {
            return false
        }
    }
    return true
};