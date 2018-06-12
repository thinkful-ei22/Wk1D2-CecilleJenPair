function hazardWarningCreator (typeOfWarning) {
  //Counter for hazard alerts established to start at zero
  let warningCounter = 0;
  //Created anonymous function with location as a parameter
  return function (location) {
    //incrementing warningCounter
    warningCounter++;
    //Logging the typeOfWarning and location to the console as well as frequency of the warning today
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter === 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`)
    }
    if (warningCounter !== 1) {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`)
    }
  }
};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const deerWarning = hazardWarningCreator('Deer Season');
const bearWarning = hazardWarningCreator('Bear Season');

console.log(rocksWarning('Portland'));
console.log(deerWarning('Seattle'));
console.log(bearWarning('Boise'));
console.log(bearWarning('New Jersey'));
