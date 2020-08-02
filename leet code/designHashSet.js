/**
 * Initialize your data structure here.
 */

var MyHashSet = function () {
  this.hashSet = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let hash = key % 1000;
  let current = this.hashSet[hash];

  if (current) {
    if (!current.includes(key)) {
      current.push(key);
    }
  } else {
    this.hashSet[hash] = [key];
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let hash = key % 1000;
  let current = this.hashSet[hash];

  if (current) {
    delete current[current.indexOf(key)];
  }
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let hash = key % 1000;
  let current = this.hashSet[hash];

  if (current) {
    if (current.includes(key)) {
      return true;
    }
  }

  return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
