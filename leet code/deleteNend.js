function ListNode(val) {
    this.val = val;
    this.next = null;
}

var removeNthFromEnd = function(head, n) {
    let slowPointer = head;
    let fastPointer = head;
    let count = 0;

    while(fastPointer !== null) {
        if(count !== 0 && count%n === 0) {
            slowPointer = slowPointer.next;
        }
        fastPointer = fastPointer.next;
        count++;
    }
    if(n === 1) {
        if(count === 1) {
            head = null;
        } else {
            slowPointer.next = null;
        }
    } else {
        slowPointer.next = slowPointer.next.next;
    }
    console.log(slowPointer);
    return head;
};

let head = new ListNode(1);
head.next = new ListNode(2);

console.log(removeNthFromEnd(head, 1));