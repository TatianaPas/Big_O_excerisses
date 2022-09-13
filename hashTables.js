let user = {
  age:51,
  name: 'John',
  magic: true,
  scream: function() {
    console.log("aaaaa");
  }
}

console.log(user.age); // O(1)


//hash table Excersises

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash=0;
    for(let i=0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)*i)%
      this.data.length
      console.log(hash);
    }
    return hash;
  }


  set(key, value) {
    let address = this._hash(key)
    if(!this.data[address]) {
      this.data[address]=[];
    }
      this.data[address].push([key,value])
      return this.data
  } //O(1)
  get(key) {
    let address=this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i=0; i<currentBucket.length; i++)
      {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }   //O(1)



keys () {
  const keyArray = [];

  for(let i=0; i<this.data.length; i++)
  {
    if(this.data[i])
    {
      keyArray.push(this.data[i][0][0])
    }
  }
  return keyArray;

}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 500);
myHashTable.set('pears', 150);
myHashTable.set('lemons', 10);
console.log(myHashTable);
myHashTable.get('grapes');
myHashTable.keys();



//Given an array= [2,5,1,2,3,5,1,2,3]
//it should return 2( which repeated first)


//given array = [2,1,1,2,3,5,1,2,4]
//it should return 1 (which repeated first)

//given array = [2,3,4,5]
// it should return undefinned (no repeats)


function firstRecussingCharacter(input){
  for(let i=0; i<input.length; i++){
    for(let j=i+1; j<input.length; j++){
      if (input[i]===input[j]){
        return input[i];
      }
    }
  }
  return undefined;
} //O(n^2)

function firstRecussingCharacter2(input){
  let map = {}; //added space complexity O(n)
  for(let i=0; i<input.length; i++){

    if(map[input[i]] !== undefined) {
      return input[i];
    } else{
      map[input[i]]=i;
    }
  }
  return undefined;
} // O(n)




firstRecussingCharacter2([2,5,1,2,3,5,1,2,3])
