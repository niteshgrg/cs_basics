var levelOrderBottom = function (root) {
  let stack = [root];
  let output = [];

  if (root === null) {
    return [];
  }

  while (stack.length !== 0) {
    output.push(stack.map((node) => node.val));
    let childrens = [];
    stack.forEach((node) => {
      if (node.left !== null) {
        childrens.push(node.left);
      }
      if (node.right !== null) {
        childrens.push(node.right);
      }
    });
    stack = [...childrens];
  }

  return output.reverse();
};
