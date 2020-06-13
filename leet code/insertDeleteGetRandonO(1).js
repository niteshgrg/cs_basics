/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.obj = {};
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.obj) {
    return false;
  }
  this.arr.push(val);
  this.obj[val] = this.arr.length - 1;
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (val in this.obj) {
    let findIndex = this.obj[val];
    let lastObj = this.arr[this.arr.length - 1];
    this.arr[findIndex] = lastObj;
    this.obj[lastObj] = findIndex;
    delete this.obj[val];
    this.arr.pop();
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.arr.length);

  return this.arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
