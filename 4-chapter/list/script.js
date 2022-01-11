function arrayToList(array) {
  let list = null;
  for (i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list}; 
  }
  return list;
}

function listToArray(list) {
  let newArray = Object.values(list);
  return newArray;
}  

function prepend(value,list) {
  return {value, rest: list};
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]