const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed : ${actual} != ${expected}`
  }
};

const findKeyByValue = function (object, element) {
  for (const item in object) {
    //console.log(object[item]);
    if (object[item] === element) {
      return item;

    }
  }
  return undefined;
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
