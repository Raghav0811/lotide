const eqArrays = function (arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('Assertion Passed')
  } else {
    console.log('Assertion Failed')
  }
}

const without = function (sourceArray, itemsToRemove) {
  let remainderArray = [];
  for (const element of sourceArray) {
    if (!itemsToRemove.includes(element)) {
      remainderArray.push(element)
    }
  }
  return remainderArray;

}

console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
