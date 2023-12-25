const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    this.count += 1;
    let newNode = new Node(data);
    const searchTree = node => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        }
        else {
          searchTree(node.left);
        }
      }
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }
        else {
          searchTree(node.right);
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};