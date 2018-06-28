/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let count = countNodes(root.left);

    // count + 1 > k, root + counts nodes > k, it's at left, recursive running on left
    if(count + 1 > k) {
        return kthSmallest(root.left, k);
    } else if (count + 1 < k) {
        // count + 1 > k, it's at right, it's at right, recursive running on right
        return kthSmallest(root.right, k-(count+1));
    } else if (count + 1 === k) {
        return root.val;
    }

};

const countNodes = function(node) {
    if(node === null) return 0;

    return 1 + countNodes(node.left) + countNodes(node.right);
};
