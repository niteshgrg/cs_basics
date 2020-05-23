// var intervalIntersection = function(A, B) {
//     let returnInervals = [];
//     let firstInterval = A.reduce((acc, val) => acc.concat([{value: val[0], position: 'start', array: 1}, {value: val[1], position: 'end', array: 1}]), []);
    
//     let secondInterval = B.reduce((acc, val) => acc.concat([{value: val[0], position: 'start', array: 2}, {value: val[1], position: 'end', array: 2}]), []);
    
//     // TODO: Move to use merge routine of merge sort to reduce time complexity
//     let mergedArray = firstInterval.concat(secondInterval).sort((a, b) => {
//         let result = a.value - b.value;
//         if(result !== 0) {
//             return result;
//         } else {
//             return a.position === 'start' ? -1 : 1;
//         }
//     });

//     let tempInterval = [];
//     for(let i of mergedArray) {
//         if(i.position === 'start') {
//             tempInterval.push(i);
//         } else {
//             if(tempInterval.length > 0) {
                
//                 if(i.array === tempInterval[0].array) {
//                     tempInterval.push(i);
//                     if(tempInterval.length > 2) {
//                         for(let j = 1; j < tempInterval.length; j++) {
//                             if(tempInterval[j].position === 'end' && tempInterval[j-1].position === 'start') {
//                                 returnInervals.push([tempInterval[j-1].value, tempInterval[j].value]);
//                             }
//                         }
//                     }
//                     tempInterval = [];
//                 } else {
//                     tempInterval.push(i);
//                 }
//             }
//         }
        
//     }
    
//     return returnInervals;
// };

var intervalIntersection = function(A, B) {
    let returnInervals = [];
    let firstIntervalOngoing = false;
    let secondIntervalOngoing = false;
    let firstInterval = A.reduce((acc, val) => acc.concat([{value: val[0], position: 'start', array: 1}, {value: val[1], position: 'end', array: 1}]), []);
    
    let secondInterval = B.reduce((acc, val) => acc.concat([{value: val[0], position: 'start', array: 2}, {value: val[1], position: 'end', array: 2}]), []);
    
    // TODO: Move to use merge routine of merge sort to reduce time complexity
    let mergedArray = firstInterval.concat(secondInterval).sort((a, b) => {
        let result = a.value - b.value;
        if(result !== 0) {
            return result;
        } else {
            return a.position === 'start' ? -1 : 1;
        }
    });

    let tempInterval = [];
    for(let i of mergedArray) {
        if(tempInterval.length === 2) {
            returnInervals.push([tempInterval[0].value, tempInterval[1].value]);
            tempInterval = [];
        }
        if(i.position === 'start') {
            tempInterval[0] = i;
            if(i.array === 1) {
                firstIntervalOngoing = true;
            } else {
                secondIntervalOngoing = true;
            }
        } else {
            if(tempInterval.length > 0) {
                if((i.array === 2 && firstIntervalOngoing) || (i.array === 1 && secondIntervalOngoing)) {
                    tempInterval.push(i);
                } else {
                    tempInterval = [];
                }
            }

            if(i.array === 2) {
                secondIntervalOngoing = false;
            } else {
                firstIntervalOngoing = false;
            }
        }
        
    }
    
    return returnInervals;
};

console.log(intervalIntersection([[3,5],[9,20]], [[4,5],[7,10],[11,12],[14,15],[16,20]]));

console.log(intervalIntersection([[10,12],[18,19]],[[1,6],[8,11],[13,17],[19,20]]));