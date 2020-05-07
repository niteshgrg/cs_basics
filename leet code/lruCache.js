/**
 * @param {number} capacity
 */

class node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    this.map = {};
    return this;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(key in this.map) {
        let selectedNode = this.map[key];
        if(selectedNode.prev != null) {
            selectedNode.prev.next = selectedNode.next;
        } else {
            return selectedNode.value;
        }
        if(selectedNode.next != null) {
            selectedNode.next.prev = selectedNode.prev
        } else {
            this.tail = selectedNode.prev;
        };
        selectedNode.next = this.head;
        selectedNode.prev = null;
        this.head.prev = selectedNode;
        this.head = selectedNode;

        console.log('head');
        console.log(this.head);
        console.log('tail');
        console.log(this.tail);
        console.log('map');
        console.log(this.map);
        
        return selectedNode.value;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.head == null) {
        let newNode = new node(key, value, null, null);
        this.head = this.tail = newNode;
        this.map[key] = newNode;
    } else if (key in this.map) {
        let currentNode = this.map[key];
        if(currentNode.prev == null) {
            currentNode.value = value;
        } else {
            currentNode.value = value;
            currentNode.prev.next = currentNode.next;
            if(currentNode.next == null) {
                this.tail = currentNode.prev;
            } else {
                currentNode.next.prev = currentNode.prev;
            }
            currentNode.next = this.head;
            currentNode.prev = null;
            this.head.prev = currentNode;
            this.head = currentNode;
        }
    } else {
        let newNode = new node(key, value, this.head, null);
        this.head.prev = newNode;
        this.head = newNode;
        this.map[key] = newNode;
    }
    if(Object.keys(this.map).length > this.capacity) {
        delete this.map[this.tail.key];
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
    }
    console.log('head');
    console.log(this.head);
    console.log('tail');
    console.log(this.tail);
    console.log('map');
    console.log(this.map);
    
};

// Test case 1
// var obj = new LRUCache(2)
// console.log(obj.get(1));
// obj.put(1,1);
// obj.put(2,2);
// console.log(obj.get(1));
// obj.put(3,3);
// console.log(obj.get(2));
// obj.put(4,4);
// console.log(obj.get(1));
// console.log(obj.get(3));
// console.log(obj.get(4));

// Test case 2
var obj = new LRUCache(10)
obj.put(10,13);
obj.put(3,17);
obj.put(6,11);
obj.put(10,5);
obj.put(9,10);
obj.get(13);
obj.put(2,19);
obj.get(2);
obj.get(3); 


obj.put(5,25);

obj.get(8)
obj.put(9,22); 


obj.put(5,5);
obj.put(1,30);

obj.get(11);
obj.put(9,12);


obj.get(7);  
obj.get(5);
obj.get(8);
obj.get(9);
obj.put(4,30);  


obj.put(9,3);


obj.get(9); // 9 4 5 1 3 2 10 6


obj.get(10);  //10 9  4 5  1  3 2 6

obj.get(10);
obj.put(6,14);  
obj.put(3,1);
obj.get(3);
obj.put(10,11);
obj.get(8);
obj.put(2,14);
obj.get(1);
obj.get(5);
obj.get(4);
obj.put(11,4);
obj.put(12,24);
obj.put(5,18);   
obj.get(13);
obj.put(7,23);
obj.get(8);
obj.get(12);
obj.put(3,27);
obj.put(2,12);
obj.get(5);   
obj.put(2,9)
obj.put(13,4);
obj.put(8,18);
obj.put(1,7);

console.log(obj.get(6));


// console.log(obj.get(2));
