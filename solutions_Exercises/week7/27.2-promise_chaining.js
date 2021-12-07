const makeAllCaps=(arr)=>{
  return new Promise((resolve, reject)=>{
    arr.forEach(element => {
      if(typeof element==="number"||element.toLowerCase()===element.toUpperCase()){
        reject("nnnnnnnnnnnnnnnn");
      }
    });
    resolve(arr);
  });
} ;

const sortWords=(arr)=>{
  return new Promise((resolve, reject)=>{
    arr.forEach(element => {
        if(typeof element==="number"||element.toLowerCase()===element.toUpperCase()){
          reject("nnnnnnnnnnnnnnnn");
      }
    });
      resolve(arr.sort());
  });
} ;

const arr1=["gfbd", "dgfhdggg", "jjj", "fgntee", "yfyert"];
const arr2=["gfbd", "dgfhdggg", "2", "fgntee", "yfyert"];

makeAllCaps(arr1)
.then((data)=>sortWords(data))
.then((data)=>console.log(data))
.catch((err)=>console.log(err));

sortWords(arr2)
.then((data)=>console.log(data))
.catch((err)=>console.log(err));



