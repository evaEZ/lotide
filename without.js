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

const without = function (source, itemsToRemove){
  let newArray = [];
  for (let i = 0; i < source.length; i++){
    let test = true;
    for (let n = 0; n < itemsToRemove.length; n++){
      if (source[i] === itemsToRemove[n]){
        test = false;
        continue;
      }
    }
    if (test === true){
      newArray.push(source[i]);
    }
  }
return newArray; 
};
//TEST CODE
assertArraysEqual(without([1, 3], [3]), []);
assertArraysEqual(without([1, "3"], [1, "3"]), []);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);