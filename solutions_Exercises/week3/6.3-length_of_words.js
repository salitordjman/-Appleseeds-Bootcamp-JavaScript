const arr1= ["boo", "doooo", "hoo","ro"];

let i=0, j=arr1.length;
let count= [], word=[];
// for(; i<j; i++){
//   word= arr1.shift();
//   count[i]= word.length;
//   console.log(count[i]);
// }
for(; i<arr1.length; i++){
  count[i]= arr1[i].length;
  console.log(count[i]);
}