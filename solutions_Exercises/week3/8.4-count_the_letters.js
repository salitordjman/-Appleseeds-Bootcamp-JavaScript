// const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const array = ["Hello"];
const waza=arr=>{
   x = arr.toString().toLowerCase().match(/[a-z]/g);
   
   for(let i=0;i<x.length;i++){
     let y=x[i];
     let count=0;
   for(let j=0;j<i;j++){
     if(y===[j]){
       break;
     }
    else{
      for(let c=i;c<x.length;c++){
        if(y===x[c]){
          count++;
        }
      };
        
    };
  }
    if(count>0){
      console.log(`${x[i]}: ${count},`);
    }
   };
};
waza(array)