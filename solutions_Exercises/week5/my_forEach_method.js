//!1--------------------------------------------------------
const words = ["one", "two", "three", "four", "five"];

// const printNum=(arr)=>{
//   arr.forEach((el,ind)=>(console.log(ind, el)));
// }
// printNum(words);


const printNum=(numInt, numWord)=>{
  console.log(numInt, numWord);
}

const numcalc =(arr,callback)=>{
  for(let elm in arr){
    callback(elm, arr[elm]) 
  }
}
numcalc(words,printNum)