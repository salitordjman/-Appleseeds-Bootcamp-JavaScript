const greaterThanTen=(num)=>{
  return new Promise((resolve, reject)=>{
    if(num>10){
      resolve(num);
    }else{
      reject(num);
    }
  });
} ;
  greaterThanTen(2)
  .then((numnum)=>console.log(`${numnum} Greater Than 10`))
  .catch((numnum)=>console.log(`${numnum} Less Than 10`));