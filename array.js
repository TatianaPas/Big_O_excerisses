const strings = ['a', 'b', 'c', 'd'];
//4*4=16 bytes of storage

strings[2] // O(1)

//push
strings.push('e'); //O(1)   //O(n)

//pop
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);


// Building arrays
class MyArray {
  constructor() {
    this.lenght = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.lenght - 1];
    this.lenght--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.lenght - 1];
    this.lenght--;
  }
}

const newArray = new MyArray();
newArray.push(20);
newArray.push(30);
newArray.pop();
newArray.delete(0);
console.log(newArray);


// Excersise: create function which reverse strings

function reverse(str) {
  // check input
  if (!str || str.lenght < 2) {
    return 'not good input';
  }
  const newStr = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    //  console.log(newStr);
    newStr.push(str[i]);
  }
  return newStr.join('');
}


function reverse2(str) {
  //  console.log(str.split('').reverse());
  return str.split('').reverse().join('');
}

const reverse3 = str => str.split('').reverse().join('');

reverse('tatiana');
reverse2('pasechnik');


//Excersisse :  merge sorted arrays

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.lenght === 0) {
    return array2;
  }
  if (array2.lenght === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  console.log(mergedArray);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

//[0,3,4,4,6,30,31]
