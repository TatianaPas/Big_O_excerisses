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
  tweet:'t1',
date:2002},{
  tweet:'t2',
  date:2005
}, {
  tweet:'t3',
  date:2017
}];

//a(n^2) => can be costly

//simple version ['t1', 't2', 't3']
//array[0];  //O(1)
//array[array.length-1];  //O(1)
