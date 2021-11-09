let numSiblings = prompt('How many siblings do you have?');
numSiblings = Number(numSiblings);
if(numSiblings === 1){
  console.log('1 sibling!');
}
else if(numSiblings>1){
  console.log('More than 1 sibling');
}
else {
  console.log('No siblings');
}

// חשוב לשנות קלט למספר אחרת הוא נקלט כתו ולא כמספר
// The Number() method
// The parseInt() method
// The parseFloat() method