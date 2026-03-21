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

function summElementsWorker(...arr) {
let sum = 0;
  for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

function differenceMaxMinWorker(...arr) {
if(arr.length === 0)
    return 0;
let min = arr[0];
let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(min > arr[i]) {
      min = arr[i];
    }
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
if(arr.length === 0)
    return 0;
  let sumElenElement = 0;
let sumOddElement = 0;
for(let i = 0; i < arr.length; i++) {
  if(arr[i]%2 === 0) {
    sumOddElement += arr[i];
  } else {
    sumElenElement += arr[i];
  }
} 
return sumOddElement - sumElenElement;
}

function averageEvenElementsWorker(...arr) {
if(arr.length === 0)
    return 0;
let sumElenElement = 0;
let countElenElement = 0;
for(let i = 0; i < arr.length; i++) {
  if(arr[i]%2 === 0) {
    sumElenElement += arr[i];
    countElenElement += 1;  
  } 
} if(countElenElement === 0) {
    return 0;
  }  
return sumElenElement / countElenElement;
}

function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for(let i = 0; i < arrOfArr.length; i++) {
const result = func(...arrOfArr[i]);
if(result > maxWorkerResult) {
  maxWorkerResult = result;
}
} 
return maxWorkerResult;
}
