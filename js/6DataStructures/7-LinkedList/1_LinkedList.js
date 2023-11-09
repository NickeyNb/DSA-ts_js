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

// Single linked list

//  node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // empty
    isEmpty() {
        return this.size === 0;
    }

    // get size
    getSize() {
        return this.size;
    }

    // Appending new node at first = O(1)
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

    // Appending new node at last= O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    // Inserting new node at given Index(0-based) = O(n)
    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log(`Can't insert`);
        } else {
            if (index === 0) {
                this.prepend(value);
                return;
            } else if (index === this.size) {
                this.append(value);
                return;
            } else {
                const node = new Node(value);
                let i = 0;
                let curr = this.head;
                while (curr != null) {
                    if (i === index - 1) {
                        node.next = curr.next;
                        curr.next = node;
                        this.size++;
                        return;
                    }
                    curr = curr.next;
                    i++;
                }
            }
        }
    }

    // Delete first node = O(1)
    deleteAtStart() {
        if (this.isEmpty()) {
            console.log("List is Empty !!");
            return;
        }
        let deletedNode = this.head;
        this.head = this.head.next;
        deletedNode.next = null;
        this.size--;
    }

    // Delete last node = O(n)
    deleteAtLast() {
        if (this.isEmpty()) {
            console.log("List is Empty !!");
            return;
        }
        let deletedNode;
        let prev = this.head;
        if (prev.next === null) {
            this.head = null;
            this.size--;
            return;
        }
        let curr = this.head.next;
        while (curr.next != null) {
            curr = curr.next;
            prev = prev.next;
        }
        prev.next = null;
        deletedNode = curr;
        this.size--;
    }

    // Delete a particular node = O(n)
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            console.log(`Can't delete, invalid index`);
            return;
        } else {
            if (index === 0) {
                this.deleteAtStart();
                return;
            } else if (index === this.size - 1) {
                this.deleteAtLast();
                return;
            } else {
                let i = 0;
                let curr = this.head;
                while (curr != null) {
                    if (i === index - 1) {
                        let deletedNode = curr.next;
                        curr.next = deletedNode.next;
                        deletedNode.next = null;
                        this.size--;
                    }
                    curr = curr.next;
                    i++;
                }
            }
        }
    }

    // Display the list = O(n)
    display() {
        if (this.isEmpty()) {
            console.log(`Cannot display, List is empty !`);
        }
        let curr = this.head;
        let listValues = "";
        while (curr != null) {
            listValues = listValues + `${curr.value}-> `;
            curr = curr.next;
        }

        console.log(listValues + "null");
    }

    // Searching a value in List = O(n)
    searchElement(value) {
        if (this.isEmpty()) {
            console.log(`Can't search, list is empty !`);
            return;
        }
        let curr = this.head;
        let i = 0;
        while (curr != null) {
            if (curr.value === value) {
                console.log(`Element first found in ${i}th index`);
            }
            curr = curr.next;
            i++;
        }
        console.log(`Element is not present in the list !`);
    }
}

// Creating instance of linkedList
const list = new LinkedList();

console.log(list.isEmpty());
console.log(`Size is : ${list.getSize()}`);

list.prepend(0);
list.prepend(1);
list.prepend(2);
list.display();
console.log(`Size is : ${list.getSize()}`);

list.append(3);
list.append(4);
list.append(5);
list.display();
console.log(`Size is : ${list.getSize()}`);

list.insert(-1, 0);
list.display();
console.log(`Size is : ${list.getSize()}`);

list.deleteAtStart();
list.display();
console.log(`Size is : ${list.getSize()}`);

list.deleteAtLast();
list.display();
console.log(`Size is : ${list.getSize()}`);

list.deleteAtIndex(2);
list.display();
console.log(`Size is : ${list.getSize()}`);

list.searchElement(11);
list.display();
console.log(`Size is : ${list.getSize()}`);
