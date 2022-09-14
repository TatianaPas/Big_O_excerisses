
class Node {
  constructor(value) {
    this.value = value,
    this.next=null,
    this.prev=null //added for double list
  }
}


class DoubleLinkedList {
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
    newNode.prev = this.tail; // added for double list
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
  }
  prepend(value) {   //O(1)
    const newNode = {
      value: value,
      next: this.head,
      prev: null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
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


  insert (index, value) {  //O(n)
    //check params
    if(index>=this.length)
    {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next:null,
      prev:null
    };
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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

  remove(index)
  {
    //check params
    const leader = this.traverseToIndex(index-1);
    const unwanted = leader.next;
    leader.next = unwanted.next;
    this.length --;
    return this.printList();
  }
}

const doubleLinkedList = new DoubleLinkedList(3);
doubleLinkedList.append(2);
doubleLinkedList.append(5);
doubleLinkedList.prepend(1);
console.log(doubleLinkedList);


class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {  //O(1)
    const newNode = new Node(value); //with class Node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++;
    return this;
  }
  prepend(value) {   //O(1)
    const newNode = {
      value: value,
      next: this.head,
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

  insert (index, value) {  //O(n)
    //check params
    if(index>=this.length)
    {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next:null,
    };
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
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

  remove(index)
  {
    //check params
    const leader = this.traverseToIndex(index-1);
    const unwanted = leader.next;
    leader.next = unwanted.next;
    this.length --;
    return this.printList();
  }

reverse ()   {
  if(!this.head.next) {
    return this.head;
  } else{
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(3,999);
myLinkedList.remove(4);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverse());
