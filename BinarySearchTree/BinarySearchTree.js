/**
* Class to represent a Node in a Binary Search Tree (BST).
*/
class BSTNode {
    /**
    * Constructs a new instance of a BST node.
    * @param {number} data The integer to store in the node.
    */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
        */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
        */
        this.root = null;
    }

    /**
    * Determines if this tree contains the given searchVal.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} searchVal The number to search for in the node's data.
    * @returns {boolean} Indicates if the searchVal was found.
    */
    contains(searchVal) {
        if (this.isEmpty()) {
            return false
        }
        let runner = this.root;
        while (runner) {
            if (searchVal > runner.data) {
                runner = runner.right;
            }
            else if (searchVal < runner.data) {
                runner = runner.left;
            }
            else if (searchVal == runner.data) {
                return true;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (current == null) {
            return false;
        } else if (current.data < searchVal) {
            return this.containsRecursive(searchVal, current.right);
        } else if (current.data > searchVal) {
            return this.containsRecursive(searchVal, current.left);
        } else if (current.data == searchVal) {
            return true;
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        if (!startNode) {
            return null;
        }
        let minVal = this.min(startNode);
        let maxVal = this.max(startNode);
        return maxVal - minVal;
    }


    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
    */
    isEmpty() {
        if (this.root === null) {
            return true;
        }
        return false;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
    */
    min(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
    */
    minRecursive(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        if (!current.left) return current.data;

        return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
    */
    max(current = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
    */
    maxRecursive(current = this.root) {
        if (this.isEmpty()) return null;
        if (!current.left) return current.data;

        return this.minRecursive(current.left);
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
    root
     10
    /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
    root
      10
    /   \
    5     15
   / \    / \
  2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                 root
              <-- 25 -->
            /            \
          15             50
        /    \         /    \
      10     22      35     70
     /  \   /  \    /  \   /  \
    4   12 18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);

emptyTree.print();
console.log("isEmpty: ", emptyTree.isEmpty());
console.log("min: ", emptyTree.min());
console.log("minRecursive: ", emptyTree.minRecursive());
console.log("max: ", emptyTree.max());
console.log("max recursive: ", emptyTree.maxRecursive());
console.log("Contains: ", emptyTree.contains(2));



twoLevelTree.print();
console.log("isEmpty: ", twoLevelTree.isEmpty());
console.log("min: ", twoLevelTree.min());
console.log("minRecursive: ", twoLevelTree.minRecursive());
console.log("max: ", twoLevelTree.max());
console.log("max recursive: ", twoLevelTree.maxRecursive());

threeLevelTree.print();
console.log("isEmpty: ", threeLevelTree.isEmpty());
console.log("min: ", threeLevelTree.min());
console.log("minRecursive: ", threeLevelTree.minRecursive());
console.log("max: ", threeLevelTree.max());
console.log("max recursive: ", threeLevelTree.maxRecursive());