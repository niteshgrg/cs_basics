let elements = {};
let roots = [];
let size = [];
let numberOfCompartments = 0;

function constructDisjointSets(arr) {
    for(let i in arr) {
        elements[arr[i]] = parseInt(i);
        roots.push(parseInt(i));
        size.push(parseInt(i));
        numberOfCompartments++;
    }
}

function find(element) {
    let index = elements[element];
    let root = roots[index];
    while(root != roots[root]) root = roots[root];


    // Path compression
    while(roots[index] != index) {
        let temp = roots[index];
        roots[index] = root;
        index = temp;
    }

    return root;
}

function connected(elem1, elem2) {
    return find(elem1) === find(elem2)
}

function componentSize(element) {
    let index = find(element);
    return size[index];
}

function unify(elem1, elem2) {
    if(connected(elem1, elem2))  return;

    if(componentSize(elem1) >= componentSize(elem2)) {
        let rootElem1 = find(elem1);
        let rootElem2 = find(elem2);
        roots[rootElem2] = rootElem1;
        size[rootElem1] += size[rootElem2];
    } else {
        let rootElem1 = find(elem1);
        let rootElem2 = find(elem2);
        roots[rootElem1] = rootElem2;
        size[rootElem2] += size[rootElem1];
    }

    numberOfCompartments--;
}


let arr = ['a', 'b','c','d','e','f','g','h','i','j'];

constructDisjointSets(arr);
console.log(elements);
console.log(roots);

unify('a', 'b');
console.log(elements);
console.log(roots);

unify('c', 'd');
console.log(elements);
console.log(roots);

unify('e', 'f');
console.log(elements);
console.log(roots);

unify('g', 'h');
console.log(elements);
console.log(roots);

unify('i', 'j');
console.log(elements);
console.log(roots);



unify('j', 'g');
console.log(elements);
console.log(roots);




unify('h', 'f');
console.log(elements);
console.log(roots);



unify('a', 'c');
console.log(elements);
console.log(roots);

unify('d', 'e');
console.log(elements);
console.log(roots);

unify('g', 'b');
console.log(elements);
console.log(roots);

unify('i', 'j');
console.log(elements);
console.log(roots);
