function reverseArray(array) {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  } 
return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

//Second Solution

function reverseArray(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  } 
return newArray;
}
 
console.log(reverseArray(["A", "B", "C"]));

//Third Question

function reverseArrayInPlace(arrayValue) {
  let placeHolder = [];
  let length = arrayValue.length;  
  for (i = 0; i < Math.floor(length / 2); i++) {
    placeHolder = arrayValue[i];
    arrayValue.splice(i, 1, arrayValue[length - (i + 1)]);
    arrayValue.splice(length - (i + 1), 1, placeHolder);
  }  
  return arrayValue;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);