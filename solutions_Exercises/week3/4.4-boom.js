let boom = a =>{
  for(let i=1;i<=a;i++){
    if(i%7===0){
      if(i.toString().includes('7')){
        console.log("BOOM-BOOM,")
      } else{
        console.log("BOOM,")
      }
    } else{
      console.log(`${i},`)
    }
  }
}
boom(80);
