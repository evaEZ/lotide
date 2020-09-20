/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it

assertEqual(words.length, 3); // original array should still have 3 elements!
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => {
  it("returns ['Lighthouse'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it("returns ['5'] for ['1','5','3']", () => {
    assert.deepEqual(tail(['1','5','3']), ['5']); 
  });  
});