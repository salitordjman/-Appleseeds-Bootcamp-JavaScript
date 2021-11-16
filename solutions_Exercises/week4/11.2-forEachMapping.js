//!1111111111111111111-----------------------
// const doubleValues=arr=>{
//   // const sum=[];
//   // arr.forEach((dou,ind) => {
//   //    return sum[ind]=dou*2;
     
//   // });
  
//   const sum = arr.map((dou) => {
//      return dou*2;
//   });



//   return sum
// }

// console.log(doubleValues([1,2,3,4,5,8,9]));

//!2222222222222222222-----------------------------

// const onlyEvenValues=arr=>{
//   const even=[];
//     let count=0;
//   arr.forEach((dou) => {
//     if(!(dou%2)){
//      return even[count++]=dou;
//     }
//   });



//   // let count=0;
//   // let even=[];
//   //  arr.map((dou) => {
//   //   if(!(dou%2)){
//   //     even[count]=dou; 
//   //     count++;
//   //   }
//   // });



//   return even
// }


// console.log(onlyEvenValues([1,2,3,3,3,3,4,5,8,9]));

//!33333333333333333333333333---------------------------


// const showFirstAndLast=arr=>{
//   const even=[];
//   let evena=[];
//     let count=0;
//   // arr.forEach((dou) => {
//   //   if(typeof dou==='string'){
//   //    return even[count++]=dou;
//   //   }
//   // });
//   // evena=even[0]+' '+even[even.length-1];
 



//    arr.map((dou) => {
//     if(typeof dou==='string'){
//       even[count]=dou; 
//       count++;
//     }
//   });
//   // evena=even[0]+' '+even[even.length-1];
//   evena=even.shift()+' '+even.pop();



  
//   return evena
// }


// console.log(showFirstAndLast([1,'ggg',2,'fghf3',3,3474574,5,"zzzz",8,9,8888,7,'ghhd',5,3,4,'iiiiyt',5,8,9]));



//!444444444444----------------------------------------

// const vowelCount=str=>{
//   let count=0;
//   let str2=str.toLowerCase().split('')
  
//   let vowel={};
  
//   str2.forEach((dou) => {
//     if(dou==='a'||dou==='e'||dou==='i'||dou==='o'||dou==='u'){
//       vowel[dou]=(vowel[dou]?++vowel[dou]:1)
//         }
//       }); 
//       return vowel
//     }
    


// console.log(vowelCount('fauAafr aaiiiaeeeoorry'));

//!55555555555555555555---------------------------------


const capitalize=str=>{
    let str2='';
    // let str2=str.toUpperCase().split('').join("")
    // console.log(str2);
    str.split('').forEach((st) => {
        str2+=st.toUpperCase();
          }); 
          return str2
        }
    
    // console.log(capitalize('fauAafr aaiiiaeeeoorry'));
    
    //!6666666666666666666666666666666----------------

    // const shiftLetters=str=>{
    //   let str2='';
    //   str.split('').forEach((st,ind) => {
    //     str2+=String.fromCharCode(str.charCodeAt(ind)-1);
    //       }); 
    //       return str2
    // }
  
    // console.log(shiftLetters('fau66Aafr aaiiAR$@*JTRB$ ia444ee eoorry'));
    
    //!7777777777777777777777777777777777------------------
    
    const swapCase=str=>{
      let count=0;
      let str2='';
      str.split(' ').forEach((st,ind) => {
        ind%2 ? str2+=st+" " : str2+=capitalize(st)+" "
          }); 
          return str2
    }
    console.log(swapCase('FauAafr aaiiA iaee eoorry'));
    
    












