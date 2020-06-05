/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.list = [];
  this.last = 0;

  for (let i of w) {
    if (this.list.length === 0) {
      this.list.push(i);
    } else {
      this.list.push(i + this.list[this.list.length - 1]);
    }
  }

  this.last = this.list[this.list.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let selectNumber = Math.random() * this.last;
  return this.list.findIndex((number) => {
    return number >= selectNumber;
  });
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
