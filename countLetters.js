//Function IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = true;
  for (const items in actual){
    if(actual[items] !== expected[items]){
      result = false;
    }
  }
  if (result === true) {
    console.log(`Assertion Passed`);
  } else {
    console.log(`Assertion Failed`);
  }
};

const countLetters = function(str){
  const results = {};
  for (let i = 0; i < str.length; i++){
    let letters = str[i];
    if (results[letters]){
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
  } 
  return results;
};
//TEST CODE
assertEqual(countLetters('LHL'),{L:2, H:1});
assertEqual(countLetters('ABC'),{A:1,B:1,C:2});