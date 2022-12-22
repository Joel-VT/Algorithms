/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if (this.items.length == 0) {
            return true;
        }
        return false;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }
}


// const newStack = new Stack();
// console.log(newStack.isEmpty());
// console.log(newStack.push(1));
// console.log(newStack.push(2));
// console.log(newStack.push(3));
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack.size());
// console.log(newStack.peek());


//BONUS: Do it with a linked list instead

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    push(item) {
        const NewStackNode = new StackNode(item);
        NewStackNode.next = this.head;
        this.head = NewStackNode;
        this.count ++;
        return this;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const oldHead = this.head;
        this.head = oldHead.next;
        this.count --;
        return oldHead.data;
    }

    isEmpty() {
        if (this.count == 0) {
            return true;
        }
        return false;
    }
}

const newStack = new LinkedListStack();
console.log(newStack.isEmpty());
console.log(newStack.push(1));
console.log(newStack.pop());