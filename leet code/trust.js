var findJudge = function(N, trust) {
    let eligible = {};
    let disqualified = {};
    if(N === 1) {
        return 1;
    }
    for(let i of trust) {
        if(i[0] in eligible) {
            delete eligible[i[0]];
        }
        if(!(i[1] in disqualified)) {
            i[1] in eligible ? eligible[i[1]] += 1 : eligible[i[1]] = 1; 
        }
        disqualified[i[0]] = true;
    }
    for(let i of Object.keys(eligible)) {
        if(eligible[i] === N-1) {
            return i;
        }
    }
    return -1;
};

console.log(findJudge(2,[[1,2],[2,1]]));