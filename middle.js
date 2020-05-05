const middle = function (array) {
  let runningArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    runningArray.push(array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]);
    return runningArray;
  } else {
    runningArray.push(array[Math.floor(array.length / 2)]);
    return runningArray;
  }
}

module.exports = middle;
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));

