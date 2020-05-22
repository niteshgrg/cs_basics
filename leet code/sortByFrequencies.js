/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let frequencyAvailableHashMap = {};
    let maxCount = 0;
    let returnString = "";
    
    for(let i of s) {
        if(i in frequencyAvailableHashMap) {
            frequencyAvailableHashMap[i] += 1;
        } else {
            frequencyAvailableHashMap[i] = 1; 
        }
        if(frequencyAvailableHashMap[i] > maxCount) {
            maxCount = frequencyAvailableHashMap[i];
        }
    }
    
    let frequencyArray = new Array(maxCount + 1).fill().map(x => []);
     
    for(let i in frequencyAvailableHashMap) {
        frequencyArray[frequencyAvailableHashMap[i]].push(i);
    }
    
    for(let i = frequencyArray.length - 1; i > 0; i--) {
        for(let j = 0; j < frequencyArray[i].length; j++) {
            returnString += frequencyArray[i][j].repeat(i);
        }
    }
    
    return returnString;
    
};