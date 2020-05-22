/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "]") {
            let tillNow = "";
            while (true) {
                let curr = stack.pop();
                if(curr === "[") break;
                tillNow = curr + tillNow;
            }
            let multiplier = "";
            while (true) {
                if(stack.length === 0) break;
                let temp = stack.pop();
                if(isNaN(parseFloat(temp))) {
                    stack.push(temp);
                    break;
                }
                multiplier = temp + multiplier;
            }
            multiplier = parseInt(multiplier);
            stack.push(tillNow.repeat(multiplier));
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

console.log(decodeString("100[leetcode]"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));