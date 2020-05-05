const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `Assertion Failed : ${actual} != ${expected}`
  }
};

const countLetters = function (string) {
  const result = {};
  for (const item of string) {
    if (item !== " ") {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
}

console.log(countLetters("Malayalam"));
console.log(countLetters("Mississippi"));

