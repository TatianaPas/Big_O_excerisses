// Ex. 1 What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}
//Answer: BIG O(3+4n) => O(n)



// Ex. 2  What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Answer BIG O(4+5n) => O(n)


// Ex.3

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function(boxes) {
    console.log(boxes);
  });
  boxes2.forEach(function(boxes) {
    console.log(boxes);
  });
}

//Answer O(a+b);


// Ex. 4

//Find first, Find last.
const array = [{
  tweet: 't1',
  date: 2002
}, {
  tweet: 't2',
  date: 2005
}, {
  tweet: 't3',
  date: 2017
}];

//a(n^2) => can be costly

//simple version ['t1', 't2', 't3']
//array[0];  //O(1)
//array[array.length-1];  //O(1)



//Ex 5.

//Given 2 arrays, create a function that let's a user know where there two arrays contain any common item


//2 paramenters - arrays- no size limit
//return true or false

array1 = ['a', 'b', 'c', 'x','x'];
array2 = ['z', 'y', 'i'];
array3 = ['z', 'y', 'x'];

function containsCommonItems(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}


containsCommonItems(array1,array2);

containsCommonItems(array1, array3);
// O(a*b) time complexity
//O(1) space complexity


//another solution, trying to reduce time

// array1 ==>obj{
//a:true,
//b:true,
//c:true,
//x:true
//}
//array2[index] === obj.properties

function containsCommonItems2(array1, array2) {
  //loop through first array and create object where properties === items in the array
  let map ={};
  for (let i = 0; i < array1.length; i++) {
    if(!map[array1[i]]){
      const item=array1[i];
      map[item] = true;
    }
  }

  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < array2.length; j++) {
    if(map[array2[j]]){
      return true;
    }
  }
  return false;
}

containsCommonItems2(array1, array3);
//O(a+b) Time Complexity
//O(a) Space compexity


//another solution
function containsCommonItem3(arr1, arr2) {
  return arr1.some(item=>arr2.includes(item))
}
containsCommonItem3(array1, array3);
