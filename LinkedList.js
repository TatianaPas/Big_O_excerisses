
class Node {
  constructor(value) {
    this.value = value,
    this.next=null;
  }
}

class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {  //O(1)
    //without claa Node
  //  const newNode = {
    //  value: value,
    //  next: null
    //};

    const newNode = new Node(value); //with class Node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
  }
  prepend(value) {   //O(1)
    const newNode = {
      value: value,
      next: this.head
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length ++;
    return this;
  }

printList() {
  const array = [];
  let currentNode = this.head;
  while(currentNode !==null)
  {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array;
}


  insert (index, value) {
    //check params
    if(index>=this.length)
    {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next:null
    };
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();

  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index)
    {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);


myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(3,999);
console.log(myLinkedList.printList());
