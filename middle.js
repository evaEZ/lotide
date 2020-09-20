/*
//Function IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
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
*/

const middle = function (arr){
  let mid = [];
  if (arr.length === 0 || arr.length === 1 || arr.length === 2){
    return mid;
  } else {
    if ((arr.length%2) === 0){
      mid.push(arr[(arr.length/2-1)]);
      mid.push(arr[arr.length/2]);
    } else {
      mid.push(arr[(arr.length-1)/2]);
    }
    return mid;
  }
};

module.exports = middle;

/*
//TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
*/
