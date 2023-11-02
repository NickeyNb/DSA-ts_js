// Queue Implementation(FIFO)
/**
 * enqueue(element) - add element to queue
 * dequeue() - remove the oldest element
 * peek() - get the value of the element at the front of the queue without removing it.
 * isEmpty() - check if the queue is empty.
 * size() - get the number of elements in the queue.
 * print() - visualize the elements in the queue.
 */

// using ARRAY
// As we are using array of items therefore deletion time complexity using shift() operation is O(n)
// For optimization use Object.
// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(element) {
//         this.items.push(element); // Adding elements from rear end
//     }
//     dequeue() {
//         return this.items.shift(); // Remove element from front end and return it
//     }
//     isEmpty() {
//         if (this.items.length === 0) return true;
//         return false;
//     }
//     peek() {
//         if (!this.isEmpty()) return this.items[0];
//         return null;
//     }
//     size() {
//         return this.items.length;
//     }
//     print() {
//         console.log(this.items.toString());
//     }
// }
// creating queue instance
// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.print(); // 1, 2, 3
// console.log(queue.peek()); // 1
// console.log(queue.size()); // 3

// const deletedElement = queue.dequeue();
// console.log(deletedElement); // 1
// queue.print(); // 2, 3
// console.log(queue.peek()); // 2

// =================================================================

// using OBJECT - more optimized as deletion in object in O(1)
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(element) {
        this.items[this.rear] = element; // this.front is used as key and element is the value
        this.rear++;
    }
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    size() {
        return this.rear - this.front;
    }
    isEmpty() {
        return this.front - this.rear === 0;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
    }
    print() {
        console.log(this.items);
    }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // 1, 2, 3
console.log(queue.peek()); // 1
console.log(queue.size()); // 3

const deletedElement = queue.dequeue();
console.log(deletedElement); // 1
queue.print(); // 2, 3
console.log(queue.peek()); // 2
