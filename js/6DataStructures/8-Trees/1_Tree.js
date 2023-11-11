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
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(3);
