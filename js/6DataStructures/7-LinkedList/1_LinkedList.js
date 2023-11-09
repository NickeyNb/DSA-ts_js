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
    // Adding new node at first = O(1)
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // Adding new node at last = O(n)
    append(value) {
        const node = new Node(value);
        let temp = this.head;
        if (this.isEmpty()) {
            this.head = node;
        } else {
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    // Adding the new node at given position = O(n)
    insert(value, pos) {
        if (pos < 1 || pos > this.size + 1) {
            console.log("Enter valid position");
            return;
        }
        const node = new Node(value);
        if (pos === 1) {
            this.prepend(value);
        } else {
            if (pos === this.size + 1) {
                this.append(value);
            } else {
                let countNodes = 1;
                let curr = this.head;
                while (curr.next != null) {
                    if (countNodes === pos - 1) {
                        node.next = curr.next;
                        curr.next = node;
                        return;
                    }
                    curr = curr.next;
                    countNodes++;
                }
            }
        }
    }

    // Remove
    remove(index) {
        if (index <= 0 || index > this.size) {
            console.log("Cannot Delete ");
            return;
        }
        let removeNode;
        if (index === 1) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    // Search
    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 1;
        let curr = this.head;
        while (curr != null) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    // Displaying the list = O(n)
    display() {
        if (this.isEmpty()) {
            console.log("List is Empty !");
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr != null) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.append(1);
list.append(2);
list.append(3);
list.display();
list.insert(4, 0);
list.display();
console.log(list.getSize());
