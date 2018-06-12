'use strict';
let nums = [765, 65, 12, 9, 81];

function max(numbers) {
  let i = 0;
  let currentMax = 0;
  while (i <= numbers.length) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

//console.log(max(nums));

function min(numbers) {
  let i = 0;
  let currentMin = numbers[0];
  while (i <= numbers.length) {
    if (currentMin > numbers[i]) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

console.log(min(nums));
