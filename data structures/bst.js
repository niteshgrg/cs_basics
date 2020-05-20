function Node(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;

    return this;
}

const search = (root, element) => {
    if(root.val === element) return true;
    if(root.val < element) search(root.left, element);
    else search(root.right, element);
    return false;
}

const add = (root, element) => {
    if(root.val === element) return false;
    if(root.val < element) {
        if(root.right === null) {
            root.right = new Node(element);
            return true;
        }
        add(root.right, element);
    } else if (root.val > element) {
        if(root.left === null) {
            root.left = new Node(element);
            return true;
        }
        add(root.left, element);
    }
}

const findSmallestNumber = (root) => {
    while(root.left !== null) return findSmallestNumber(root.left);
    return root;
}

const remove = (root, element) => {
    if(root === null) return false;
    if(root.val === element) { 
        if(root.left === null && root.right === null) {
            return null;
        } else if(root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        } else {
            let smallestNumber = findSmallestNumber(root.right);
            console.log(smallestNumber);
            root.val = smallestNumber.val;
            root.right = remove(smallestNumber, smallestNumber.val);
        }
    } else if (root.val < element) {
        root.right = remove(root.right, element);
    } else {
        root.left = remove(root.left, element);
    }
    return root;
}

let tree =  new Node(4);

add(tree, 7);
console.log(tree);

add(tree, 2);
console.log(tree);

add(tree, 3);
console.log(tree);

add(tree, 2);
console.log(tree);

add(tree, 5);
console.log(tree);

add(tree, 1);
console.log(tree);

remove(tree, 2);
console.log(tree);