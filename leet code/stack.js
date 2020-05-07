var MinStack = function() {
    this.array = [];
    this.minElement = Number.MIN_SAFE_INTEGER;
    return;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    console.log(this);
    this.array.push(x);
    this.minElement = this.minElement > x ? this.minElement : x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.array.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.array[this.array.length];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minElement;
};

var obj = new MinStack()
obj.push(1)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()