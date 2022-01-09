function range (start, end, increment = start < end ? 1 : -1) {
  let list = [];
  if (increment > 0) {
  	for (i = start; i <= end; i += increment) {
      list.push(i);
  	} 
  } else {
    for (i = start; i >= end; i += increment) {
   	  list.push(i);
  	}
  }
  return list;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));

function sum (list) {
  let sumOfArray = 0
  for (i = 0; i < list.length; i++) {
    sumOfArray = sumOfArray + list[i];
  }
  return sumOfArray;
}

console.log(sum(range(1, 10)));