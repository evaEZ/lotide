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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    let items = sentence[i];
    if (results[items]){
      results[items].push(i);
    } else {
      results[items] = [];
      results[items].push(i);
    }
  }
  return results;
};

//TEST CODE
assertArraysEqual(letterPositions("hello").h,[0]);
assertArraysEqual(letterPositions("hello").e,[1]);
assertArraysEqual(letterPositions("hello").l,[2,3]);
assertArraysEqual(letterPositions("hello").o,[4]);