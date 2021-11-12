const obj1 ={
  nas: 'fbdf',
  vsrv: 'rgrerff',
  fdf: 'dfrgdrfvd',
}

const swap = obj =>{
  let eee= {}; 
  
  // Object.keys(obj).forEach(i => {
  //   eee[obj[i]] = i;
  // });
  for(let i of Object.keys(obj)){
    eee[obj[i]] = i;
  }

return eee
} ;
console.log(swap(obj1));





