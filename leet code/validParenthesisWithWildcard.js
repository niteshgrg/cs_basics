var checkValidString = function(s) {
    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
    let asterkIndexArray = [];
    let stringLength = s.length;
    let count = 0;
    for(let i = 0; i < stringLength; i++) {
        if(s[i] === '(') {
            count++;
        } else if(s[i] === ')') {
            count--;
        } else {
            asterkIndexArray.push(i);
        }
        if(count < 0) {
            if(asterkIndexArray.length > 0) {
                let asterkIndex = asterkIndexArray.pop();
                s = s.replaceAt(asterkIndex, '(');
                count++;
                continue;
            } else {
                return false;
            }
        } 
    }

    asterkIndexArray = [];
    count = 0;

    for(let i = stringLength - 1; i >= 0; i--) {
        if(s[i] === ')') {
            count++;
        } else if(s[i] === '(') {
            count--;
        } else {
            asterkIndexArray.push(i);
        }
        if(count < 0) {
            if(asterkIndexArray.length > 0) {
                let asterkIndex = asterkIndexArray.pop();
                s = s.replaceAt(asterkIndex, ')');
                count++;
                continue;
            } else {
                return false;
            }
        }
        
    }
    return true;
};

console.log(checkValidString(')'));