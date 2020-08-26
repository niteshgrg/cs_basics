/**
 * @param {string[]} words
 */

var Trie = function () {
  this.children = [];
  this.endOfWord = false;

  return this;
};

var StreamChecker = function (words) {
  this.root = new Trie();
  this.selectedPointers = [];

  words.forEach((word) => {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let index = word[i].charCodeAt() - 97;
      if (!node.children[index]) {
        node.children[index] = new Trie();
      }
      node = node.children[index];
    }

    node.endOfWord = true;
  });

  return this;
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
  this.selectedPointers = [
    ...this.selectedPointers.map(
      (pointer) => pointer.children[letter.charCodeAt() - 97]
    ),
    this.root.children[letter.charCodeAt() - 97],
  ].filter((pointer) => pointer);

  return (
    this.selectedPointers.filter((pointer) => pointer.endOfWord).length > 0
  );
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
//["StreamChecker","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query","query"]
// [[["ab","ba","aaab","abab","baa"]],["a"],["a"],["a"],["a"],["a"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["b"],["b"],["b"],["a"],["b"],["a"],["b"],["a"],["a"],["a"],["b"],["a"],["a"],["a"]]

//[null,false,false,false,false,false,true,true,true,true,true,false,false,true,true,true,true,false,false,false,true,true,true,true,true,true,false,true,true,true,false]
let a = new StreamChecker(["ab", "ba", "aaab", "abab", "baa"]);
console.log(a.query("a"));
console.log(a.query("a"));
console.log(a.query("a"));
console.log(a.query("a"));
console.log(a.query("a"));
console.log(a.query("b"));
console.log(a.query("a"));
