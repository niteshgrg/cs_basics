const LSB = function(num) {
    return (num & -num);
}

const constructBinaryTree = function(nums) {
    let binaryTreeLength = nums.length + 1;

    let binaryIndexTree = new Array(binaryTreeLength);

    for(let i = 1; i < binaryTreeLength; i++) {
        binaryIndexTree[i] = nums[i-1];
    }

    for(let i = 1; i < binaryTreeLength; i++) {
        let n = i + LSB(i);
        if(n < binaryTreeLength) {
            binaryIndexTree[n] += binaryIndexTree[i];
        }
    }

    return binaryIndexTree;
}

const getSum = function(index, tree) {
    let n = index;
    let sum = 0;

    while(n !== 0) {
        sum += tree[n];
        n -= LSB(n);
    }

    return sum;
}

const rangeQuery = function(first, second, tree) {
    first = first - 1;
    return getSum(second, tree) - getSum(first, tree);
}

const updateValue = function(index, valueToAdd, tree) {
    let n = index;
    while(n < tree.length) {
        tree[n] += valueToAdd;
        n += LSB(n);
    }

}

let tree = constructBinaryTree([3, 4, -2, 7, 3, 11, 5, -8, -9, 2, 4, -8]);

console.log(tree);
console.log(rangeQuery(1, 3, tree));
updateValue(1, 6, tree);

console.log(rangeQuery(1, 3, tree));
