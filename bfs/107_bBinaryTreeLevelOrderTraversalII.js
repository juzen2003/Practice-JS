/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// result would be bottom-up 
var levelOrderBottom = function(root) {
    if(root === null) return [];
    let queue = [];
    let res = [];

    queue.push(root);

    while(queue.length !== 0) {
        let size = queue.length;
        let levelArr = [];
        let currentNode;

        for(let i = 0; i < size; i++) {
            currentNode = queue.shift();
            levelArr.push(currentNode.val);

            if(currentNode.left !== null) queue.push(currentNode.left);
            if(currentNode.right !== null) queue.push(currentNode.right);
        }

        res.unshift(levelArr);
    }

    return res;
};
