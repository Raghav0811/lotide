const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('Assertion Passed')
  } else {
    console.log('Assertion Failed')
  }
}

const eqArrays = function (arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


