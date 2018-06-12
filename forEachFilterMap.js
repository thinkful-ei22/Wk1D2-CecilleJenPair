'use strict';
const turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filteredSteps = turtleSteps.filter(step=>step[0]>=0 && step[1]>=0);

let totals = filteredSteps.map(step=>step[0]+step[1]);

let stepsForward = filteredSteps.forEach(step=>step[0][0]+step[0][0]);
    
console.log(stepsForward);





// (function(){
//     let sum=0;
//     for (let i=0;i<filteredSteps.length;i++){
//       sum+=filteredSteps[i][0];
//       return sum;
//     }
//     console.log(sum);
//   });
  