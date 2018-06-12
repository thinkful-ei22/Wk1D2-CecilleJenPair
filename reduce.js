let str = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let splitString = str.split(' ');
//
// function decode(word) {
//   //Push decoded strings into result array
//   let result = [];
//   if (word.length === 3) {
//     result.push(' ');
//     return result;
//   } else {
//     result.push(word.charAt(word.length - 1).toUpperCase());
//     return result;
//   }
// }
//
// //arr.reduce(callback[, initialValue])

const reducer = (accumulator, currentValue) => {
  if (currentValue.length === 3) {
    return accumulator + ' ';
  } else {
    return accumulator + currentValue.charAt(currentValue.length - 1).toUpperCase();
  }
}

console.log(splitString.reduce(reducer, ''));
//
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15
