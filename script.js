const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(1000).fill('nemo');


function findNemo(array) {
  array.forEach(function(item) {
    if (item ==='nemo') {
      console.log('Found Nemo');
      //break; => doesn't work with forEach
    }
  })
}

//forEach loop
const findNemo2 = array => {
  array.forEach(fish => {
    if(fish==='nemo') {
      console.log('Found Nemo');
    }
  })
}

//other loop
const findNemo3 = array =>{
  for(let fish of array) {
    if(fish === 'nemo') {
      console.log('FoundNemo');
    }
  }
}


findNemo(large); // O(n) - Linear Time

function logFirstItem(items) {
  console.log(items[0]);  // O(1)
  console.log(items [1]); // O(1)
}

logFirstItem(everyone); // O(2) - Constant Time



// Log all pairs of Array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) {
  for(let i=0; i<array.length; i++) {
    for( let j=0; j<array.length; j++) {
      console.log(array[i],array[j]);
    }
  }
}

logAllPairsOfArray(boxes)

//O(n*n) => O(n^2) - Quadratic time


function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers: ');
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log('these are the sums: ');
  numbers.forEach(function(fisrtNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(fisrtNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);

// O(n+n^2) => O(n^2);
