const assertEqual = require('./assertEqual');

const tail = function (arr) {
  let resultArr = [];
  for (let i = 1; i < arr.length; i++) {
    resultArr.push(arr[i]);
  }
  return resultArr;
};

module.exports = tail;

console.log(tail([1, 2, 3, 4, 4, 5, 5, 6, 7]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"