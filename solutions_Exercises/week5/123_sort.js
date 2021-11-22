//! mutate the original array

//! return < 0 b , a
//! return >= 0 a , b

const arr = [
  { name: 'Adam', attendance: true },
  { name: 'Shani', attendance: false },
  { name: 'Hila', attendance: true },
  { name: 'Aviad', attendance: false },
  { name: 'Garel', attendance: true },
];
// const ratingHighToLow=(arr,ffp)=>{
//   let newOrder2=arr.sort((a, b) =>{ 
//     if((a.name<b.name))
//     return -1
//     });
//   return ffp(newOrder2)
// }
// const fff=(arr)=>{
//   let newOrder=arr.sort((a, b) =>{ 
//     // if(a.attendance>b.attendance)
//     if(a.attendance&&!b.attendance)
//     return -1
//   });
//   return newOrder
// }
// console.log(ratingHighToLow(arr,fff));


  // const ratingHighToLow=(arr)=>{
  //   let newOrder2=arr.sort((a, b) =>{ 
  //     if(a.attendance&&!b.attendance) return -1
  //     else if(a.attendance&&!b.attendance&&a.name<b.name) return -1
  //     else if(!a.attendance&&!b.attendance&&a.name<b.name) return -1                         
  //     });
  //   return newOrder2
  // }



  const ratingHighToLow=(arr)=>{
    let newOrder2=arr.sort((a, b) =>{ 

      if(a.name<b.name) return -1
      if(a.attendance&&!b.attendance) return -1
      if(a.attendance&&!b.attendance&&a.name<b.name) return -1
      if(!a.attendance&&!b.attendance&&a.name<b.name) return -1                         
      });
    return newOrder2
  }

console.log(ratingHighToLow(arr));

