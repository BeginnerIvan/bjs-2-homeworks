function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
  if(min > arr[i]) {
    min = arr[i];
  } 
  if(max < arr[i]) { 
    max = arr[i];
    }
    sum += arr[i];
}
let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
getArrayParams(-10, 40, 20);
getArrayParams(1, 2, 5, -10, 10);
getArrayParams(10);

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
