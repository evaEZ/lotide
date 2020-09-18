//Function IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2){
  let output = true;
  if (arr1.length === arr2.length){
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
        output = false;
        break;
      }
    }
  } else {
    output = false;
  }
  return output;
};

const map = function(array, callback){
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to","major", "tom"];

const results1 = map(words, word => word[0]);


//TEST CODE

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
