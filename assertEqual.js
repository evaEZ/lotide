//Function IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Asserson Passed: " + actual + "===" + expected);
  } else {
    console.log("Asserson Failed " + actual + "!==" + expected);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Happy Friday", "Happy Friday");
assertEqual(11, 3);