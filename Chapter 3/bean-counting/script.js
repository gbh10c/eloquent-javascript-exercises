function countChar(passage, char) {
  let counter = 0;
  for (let i = 0; i < passage.length; i++) {
    if (passage[i] == char) {
      counter += 1;
    } 
  }
  return counter;
}



/*function countBs(passage) {
  let counter = 0;
  for (let i = 0; i < passage.length; i++) {
    if (passage[i] == 'B') {
      counter += 1;
    } else {
      continue;
    }
  }
  return counter;
}

console.log(countBs('BBC'));*/