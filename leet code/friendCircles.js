/**
 * @param {number[][]} M
 * @return {number}
 */

var findParent = function(M, element) {
    let root = element;
    
    //find root
    while(root != M[root]) root = M[root];
    
    //compress path
    let index = element;
    while(root != M[index]) {
        let temp = M[index];
        M[index] = root;
        index = temp;
    }
    
    return root;
}

var combine = function(M, element1, element2) {
    M[findParent(M, element1)] = M[findParent(M, element2)];
    return;
}


var findCircleNum = function(M) {
    let parents = (new Array(M.length).fill(0)).map((el, i) => i);
    
    for(let i in M) {
        for(let j in M[i]) {
            if(M[i][j] === 1 && i !== j) combine(parents, i, j);
        }
    }
    
    let uniqueElems = parents.filter((x, i) => i === x);
    
    return uniqueElems.length;
};

console.log(findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]));