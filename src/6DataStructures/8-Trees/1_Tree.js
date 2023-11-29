// Tree
/**
 * 1) A tree is a hierarchical ds that consists of nodes connected by edges.
 * 2) A tree is a non-linear ds, compared to arrays, etc. which are linear.
 * 3) In linear ds, the time required to search is proportional to the size of the data set.
 * 4) Trees however, owing to the nonlinear nature allow quicker and easier access to the data.
 *
 * // Tree usage
 * - DOM
 * - File system for directory structure
 * - Family tree
 *
 *
 * Degree of a tree is the maximum degree of the node.
 */

// Binary Tree
/**
 * 1) A binary tree is tree ds in which each node has at most 2 children.
 */

// Binary Search Tree
/**
 * - is a binary tree in which :
 * 1) The value of each left node must be smaller than the parent node.
 * 2) The value of each right node must be greater than the parent node.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }
    search(root, value) {
        if (this.isEmpty()) return false;
        if (root.value === value) {
            return true;
        }
        if (value > root.value) {
            return this.search(root.right, value);
        } else {
            return this.search(root.left, value);
        }
    }

    // Dfs traversals => uses Stack(LIFO)
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    }

    // Bfs traversals => uses queue(FIFO)
    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(3);
bst.insert(7);
// console.log(bst.search(bst.root, 3));
// bst.preorder(bst.root);
// bst.inorder(bst.root); // print in sorted order
// bst.postorder(bst.root);
bst.levelOrder();
