/**
 * Initialize your data structure here.
 */
function trie() {
  this.children = [];
  this.endOfWord;

  return this;
}
var WordDictionary = function () {
  this.root = trie();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let charCodes = word.split("").map((char) => char.charCodeAt() - 97);
  let node = this.root;
  charCodes.forEach((code, index) => {
    if (!node.children[code]) {
      node.children[code] = new trie();
    }
    node = node.children[code];
  });
  node.endOfWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function traverse(word, node) {
    if (word === "") {
      if (node.endOfWord) {
        return true;
      }
      return false;
    }
    let firstChar = word[0];
    word = word.substr(1);
    if (firstChar === ".") {
      let output = [false];
      node.children.forEach((child) => {
        if (child) {
          output.push(traverse(word, child));
        }
      });
      return output.reduce((acc, curr) => acc || curr);
    } else {
      if (node.children[firstChar.charCodeAt() - 97]) {
        return traverse(word, node.children[firstChar.charCodeAt() - 97]);
      } else {
        return false;
      }
    }
  }
  return traverse(word, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
