// Linked List
/**
 * 1) A linked list is a linear ds that includes a series of connected nodes.
 * 2) Each node consists of a data value and a ptr that points to the next node.
 * 3) The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
 * 4) Random access of elements is not feasible and accessing an element has linear tc.
 * 5) The LL ds supports 3 main operations:
 *      a) Insertion b) Deletion c) Search
 *
 *  Usage:-
 * 1) LL can be used to implement stack and queue.
 * 2) Photos in slide show.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            this.node = this.head;
            this.head = node;
        }
        this.size++;
    }
}

const list = new LinkedList();
console.log("Is list empty ? ", list.isEmpty());
console.log("Size is : ", list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
