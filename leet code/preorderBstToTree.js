function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
    let treeStack = [];
    let root = new TreeNode(preorder[0]);
    let parent = root;
    treeStack.push(root);
    for(let i = 1; i < preorder.length; i++) {
        let newNode = new TreeNode(preorder[i]);
        while(treeStack.length > 0 && treeStack[treeStack.length - 1].val < newNode.val) {
            parent = treeStack.pop();
            continue;
        }
        console.log(treeStack)
        if(parent.val > newNode.val) { 
            console.log(`Pushed left to ${parent.val}`);
            parent.left = newNode;
            treeStack.push(newNode);
            parent = newNode;
        } else {
            console.log(`Pushed right to ${parent.val}`);
            parent.right = newNode;
            treeStack.push(newNode);
            parent = newNode;
        }
//         if (preorder[i] < preorder[i-1]) {
//             treeStack[treeStack.length-1].left = newNode;
//             treeStack.push(newNode);
//         } else {
//             let j = 1;
            
//             while(treeStack[treeStack.length - 1].val < newNode.val && treeStack.length > 0) {
//                 parent = treeStack.pop();
//                 j++;
//             }

//             parent.right = newNode;

//             treeStack.push(newNode);
//         }
    }
    return root;
};


bstFromPreorder([8,5,1,7,10,12]);