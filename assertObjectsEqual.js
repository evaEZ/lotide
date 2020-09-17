// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  let output = true;
  if (Object.keys(object1).length === Object.keys(object2).length){
    for (const items in object1){
      if (Array.isArray(object1[items])===true){
        output = eqArrays (object1[items], object2[items]);
      } else {
        if (object1[items] !== object2[items]){
          output = false;
        }  
      } 
    }
  } else {
    output = false;
  }
  return output;
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); 