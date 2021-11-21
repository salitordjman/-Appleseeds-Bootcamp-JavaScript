//!11111111111111111111111111111111111111111
const words = ["one", "two", "three", "four", "five"];
const printNum=(arr)=>{
  arr.forEach((el,ind)=>(console.log(ind, el)));
}
printNum(words);
//!22222222222222222222222222222222222222222
const ToNumber=(arr)=>{
  let newnum=[];
  // arr.forEach((el,ind)=>(newnum[ind]=ind+1))
  arr.forEach((el,ind)=>(newnum.push(ind+1)))
  return newnum
}
console.log(ToNumber(words));
//!333333333333333333333333333333333333333333
const fruits = ["mango", "papaya", "pineapple", "apple"];
const FruitsFunc=(arr)=>{
  let newfruits=[];
  arr.forEach((el)=>{
    el==="apple"
    // ?newfruits.push(`I am eating an ${el[0].toUpperCase()+el.slice(1)}`)
    ?newfruits.push(`I am eating an ${el[0].toUpperCase()}${el.slice(1)}`)
    :newfruits.push(`I am eating a ${el}`)
  });
  return newfruits
}
console.log(FruitsFunc(fruits));

//!44444444444444444444444444444444444444444444
const numbers = [1, 2, 3, 4, 5];
const MutateTheArray=(arr)=>{
  // arr.forEach((el,ind,array)=>(array[ind]=el*2))
  arr.forEach((el,ind,array)=>(arr[ind]=el*2))
  return arr
}
console.log(MutateTheArray(numbers));






