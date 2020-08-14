/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.strArr = characters.split("");
  this.combinationLength = combinationLength;
  let temp = [...this.strArr];
  this.nextStr = this.strArr.splice(0, combinationLength);
  this.strArr = temp;

  return this;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  let temp = [...this.nextStr];
  let strIndex = this.combinationLength - 1;
  let arrayIndex = this.strArr.length - 1;
  while (this.nextStr[strIndex] === this.strArr[arrayIndex]) {
    strIndex--;
    arrayIndex--;
  }

  if (strIndex === -1) {
    this.nextStr = -1;
  } else {
    let startIndex = this.strArr.indexOf(temp[strIndex]) + 1;
    for (let str = strIndex; str < this.nextStr.length; str++) {
      this.nextStr[str] = this.strArr[startIndex];
      startIndex++;
    }
  }

  return temp.join("");
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  if (this.nextStr !== -1) {
    return true;
  }
  return false;
};

//['ab', true, 'ac', true,'bc', false]
let temp = new CombinationIterator("abc", 2);
console.log(temp.next());
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.hasNext());

temp = new CombinationIterator("ahijp", 2);
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.next());
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.hasNext());
console.log(temp.next());
console.log(temp.next());
