var findAnagrams = function(s, p) {
    let pHashMap = {};
    let output = [];
    let pLength = p.length;
    let sLength = s.length;
    
    for(let i of p) {
        if(i in pHashMap) {
            pHashMap[i] = pHashMap[i] + 1;
        } else {
            pHashMap[i] = 1;
        }
    }
    
    for(let i  = 0; i < sLength; i++) {
        let tempHashMap = {};
        let continueFlag = false;

        for(let j = i; j < i + pLength; j++) {
            if(s[j] in pHashMap) {
                if(s[j] in tempHashMap) {
                    tempHashMap[s[j]] = tempHashMap[s[j]] + 1;
                } else {
                    tempHashMap[s[j]] = 1;
                }
            } else {
                continueFlag = true;
                break;
            }
        }

        if(continueFlag) {
            continue;
        }
        
        for(let key in pHashMap) {
            if(pHashMap[key] === tempHashMap[key]) {
                continue;
            } else {
                continueFlag = true;
                break;
            }
        }
        
        if(continueFlag) {
            continue;
        }
        
        output.push(i);
    }
    return output;
};

console.log(findAnagrams("cbaebabacd", "abc"))