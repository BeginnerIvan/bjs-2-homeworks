"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
      if(d > 0) {
      let x1 = (-b + Math.sqrt(d) )/(2*a);
      let x2 = (-b - Math.sqrt(d) )/(2*a);
      arr.push(x1,x2);
    } else if(d === 0) {
      let x = -b/(2 * a);
      arr.push(x);
    }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let anualRate = percent / 100;
  let monthlyRate = anualRate / 12;
  let loanAmount = amount - contribution;
  let totalAmount = loanAmount * (monthlyRate + (monthlyRate / (((1 + monthlyRate)**countMonths) - 1)));
  let totalSumm = totalAmount * countMonths
  return + totalSumm.toFixed(2);
}