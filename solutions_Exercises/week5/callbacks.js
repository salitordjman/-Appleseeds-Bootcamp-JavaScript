//!111111111111111111111111111111111111111
const quotes=(name1)=>{
  return `"${name1}"`
}

const quoatation =(name,callback)=>{
 return (typeof callback==="function")
  ? callback(name)
  : name
}
console.log(quoatation('Sali',quotes));
//!222222222222222222222222222222222222222222222222
const decimalPoint=(summ,numm)=>{
  return summ.toFixed(numm)
}
const avgFunc=(sum1,length1,callback1)=>{
  let avg=sum1/length1
  return (typeof callback1==="function")
    ? callback1(avg, 2)
    : avg 
}
const numbers = [1, 100, 67, -5, 6784, 356, 200];
const addNumbers=(arr,callback)=>{
  let sum=0
  for(let el of arr){
  sum+=el;}
  return (typeof callback==="function")
    ? callback(sum, arr.length, decimalPoint)
    : sum
}
console.log(addNumbers(numbers,avgFunc));





