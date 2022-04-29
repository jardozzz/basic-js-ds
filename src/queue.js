const { ListNode } = require('../../../basic-js-ds/extensions/list-node.js');
const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.list = {};
    this.head = null;
    
  }
  getUnderlyingList() {
   return this.list
  }

  enqueue(value ) {
    const node=new ListNode(value)
    if (this.head==null){
      this.head=node
      this.list=node
    }
    else{
      let current=this.head
       current.next=node
      this.head=node
    }
   }
  

   dequeue() {
    const a = this.list.value;
    if (this.list.next === null) {
      this.list = {};
      this.head = null;
    } else {
      this.list.value = this.list.next.value;
      this.list.next = this.list.next.next;
     
    }
    return a;
  }
}

module.exports = {
  Queue
};
