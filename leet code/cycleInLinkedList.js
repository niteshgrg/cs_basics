
 function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let hashMap = {};
    let pointer = head;
    
    while(pointer != null) {
        console.log(pointer);
        console.log(hashMap);
        if(pointer in hashMap) {
            return pointer;
        }
        hashMap[pointer] = true;
        pointer = pointer.next;
    }
    return null;
};


let head = new ListNode(-1);
head.next = new ListNode(2);
head.next.next = head;

console.log(detectCycle(head));