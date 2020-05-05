const takeUntil = function (array, callback) {
  let finalArray = [];   //declare final array to store result
  for (let num of array) {
    if (callback(num) === true) {
      return finalArray;
    } else {
      finalArray.push(num);
    }

    //console.log(finalArray);
  }
  return finalArray;   // return final array
}//

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = [`I've`, "been", "to", "Hollywood", ",", `I've`, "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);