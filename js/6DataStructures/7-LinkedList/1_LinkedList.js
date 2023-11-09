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

    // Appending new node at first O(1)
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

    // Appending new node at last O()
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

    // Inserting new node at given Index(0-based)
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

    // display the list O(n)
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
