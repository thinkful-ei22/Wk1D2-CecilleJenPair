'use strict';
let nums = [1, 3, 6, 13];
function average(numbers) {
  let currentTotal = 0;
  //take each number in array and add to current total
  numbers.forEach(num => currentTotal+=num);
  //divde by total number of numbers
  return currentTotal/nums.length;
}


console.log(average(nums));