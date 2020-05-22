/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let frequencyAvailableHashMap = {};
    let returnString = "";
    
    for(let i of s) {
        if(i in frequencyAvailableHashMap) {
            frequencyAvailableHashMap[i] += 1; 
        } else {
            frequencyAvailableHashMap[i] = 1; 
        }
    }
    
    var sortable = Object.entries(frequencyAvailableHashMap);

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    
    for(let i of sortable) {
        returnString += i[0].repeat(i[1]);
    }
    
    return returnString;
    
};