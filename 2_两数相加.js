/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = l1
    let s2 = l2
    let result = null
    let add = (el,val) => {
        if(el === null){
            return {
                val: val,
                next: null
            }
        }else {
            el.next = add(el.next, val)
            return el
        }
    }
    while(s1 || s2){
        let num = (s1 ? s1.val : 0) + (s2 ? s2.val : 0)
        if(num > 9){
            if(s1 && s1.next){
                s1.next.val++
            }else if(s2 && s2.next){
                s2.next.val++
            }else {
                s1 = {
                    next: {
                        val: 1,
                        next: null
                    }
                }
            }
        }
        result = add(result, parseInt(num%10))
        s1 = s1 ? s1.next : null
        s2 = s2 ? s2.next : null
    }
    return result
};