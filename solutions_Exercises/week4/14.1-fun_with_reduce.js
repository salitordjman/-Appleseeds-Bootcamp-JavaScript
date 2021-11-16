const num = [87, 64, 96, 92, 88, 99, 73, 70, 64, 11, 105, 25];
//!111111111111111111111----------------------
const maxRed=arr=>{
  const maxx=arr.reduce((total,currentVal)=>{
  //   (total<currentVal)&&(total=currentVal);
  //   return total
    return Math.max(total,currentVal)
  });
  return maxx
}
console.log(maxRed(num));

//!22222222222222222222222222222----------------------

const evenSum=arr=>{
  const evenn=arr.reduce((total,currentVal)=>{
    (currentVal%2===0)&&(total+=currentVal);
    return total
  },0);
  return evenn
}
console.log(evenSum(num));

//!33333333333333333333333333333----------------------

const averSum=arr=>{
  const aver=arr.reduce((total,currentVal,ind,arr12)=>{
    total+=currentVal;
    if(ind===arr.length-1) {
      return total/(arr12.length);}
    // if(ind===arr12.length-1) {
    //   return total/(ind+1);}
    return total
  },0);
  return aver
}
console.log(averSum(num));


