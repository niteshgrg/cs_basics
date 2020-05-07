var backspaceCompare = function(S, T) {
    let i = S.length - 1;
    let j = T.length - 1;
    let sHashLeft = 0;
    let tHashLeft = 0;
    let equality = true;
    let flag = true;
    // let temp = 10;
    while(flag) {
    // while(temp) {
    //     temp--;
        console.log(`sHashLeft = ${sHashLeft}, tHashLeft = ${tHashLeft}, equality = ${equality}, flag = ${flag}, i = ${i}, j = ${j}`);
        if(i === -1 && j === -1){
            flag = false;
            continue;
        }
        if(i !== -1 && S[i] === '#') {
            sHashLeft++;
            i--;
            continue;
        }
        if(j !== -1 && T[j] === '#') {
            tHashLeft++;
            j--;
            continue;
        }
        
        if(i !== -1 && sHashLeft !== 0) {
            sHashLeft--;
            i--;
            continue;
        }
        if(j !== -1 && tHashLeft !== 0) {
            tHashLeft--;
            j--;
            continue;
        }
        
        if(i === -1) {
            equality = false;
            flag = false;
            continue;
        } else if (j === -1) {
            equality = false;
            flag = false;
            continue;
        }

        if(S[i] === T[j]) {
            i--;
            j--;
        } else {
            equality = false;
            flag = false;
        }
    }
    return equality;
};

backspaceCompare('a##c', '#a#c');