const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const waza=arr=>{
  let count={};
  const xx = array.join('').toLowerCase().split(' ').join('').split('')
  xx.forEach((char) => count[char] =((count[char])? ++count[char] : 1))
  // xx.forEach(function(i) {count[i] ? count[i]++:count[i]=1})
  // xx.forEach(i=> count[i] ? count[i]++:count[i]=1)
  // xx.forEach(i=> count[i] = (count[i] ? count[i]+=1 : 1))
  // xx.forEach(i=> count[i] ? count[i]+=1 :count[i]= 1)
  // xx.forEach(i=> count[i] ? count[i]++ :count[i]= 1)
  //הפונ' היא count[i] שווה ל- 
  console.log(count);
  console.log(Math.max(...Object.values(count)));
  };

  waza(array)





// const arr2= array.join('').toLowerCase();
// const obj={};
// console.log(arr2);

// const waza=arr=>{
//   for(let i=0;i<arr.length; i++){
//     for(let j=0;j<arr[i].length; j++){
//       if(arr[i][j]!==" "){
//         if(obj[arr[i][j]]){
//           obj[arr[i][j]]++;
//         } else{
//           obj[arr[i][j]]=1
//         }
//       }
//     }
//   }
//   return obj
// };
// console.log(waza(arr2));





// // const arr2= array.join('').toLowerCase();
// const arr2= array.join('').toLowerCase().match(/[a-z]/g);//בד"כ לא משתמשים בזה
// const obj={};
// console.log(arr2);
// // ללא FOR נוסף מיותר
// const waza=arr=>{
//   for(let i=0;i<arr.length; i++){
//     if(arr[i]!==" "){//אם שונה מרווח
//       if(obj[arr[i]]){//ARR[I] זה המפתח, OBJ זה האוביקט שאנו מכניסים אליו, obj[arr[i]] זה הערך VALUE, בדיקת תנאי אמת/שקר, אם יש ערך שאנו בודקים , למשל H והוא כבר קיים באובייקט אז לא צריך לולאה פנימית באובייקט, האובייקט יודע לזהות את זה לבד, במידה ויש הוא יגדיל אותו ב1 אם אין הוא יהיה שווה לאחד.
//         obj[arr[i]]++;
//       } else{
//         obj[arr[i]]=1
//       }
//     }
//   }
//   return obj
// };
// console.log(waza(arr2));




// const arr2= array.join('').toLowerCase(); //הפיכה למשפט עם רווחים
// const obj={};
// console.log(arr2);

// const waza=arr=>{
//   for(let i=0;i<arr.length; i++){
//     if(arr[i]!==" "){
//       if(obj[arr[i]]){
//         obj[arr[i]]++;
//         // console.log(object.keys(obj));
//       } else{ 
//         obj[arr[i]]=1
//         // console.log(obj);
//       }
//     }
//   }
//   return obj
// };
// // waza(arr2)
// console.log(waza(arr2));






// const arr2= array.join('').toLowerCase().split(' ').join(''); //  הפיכה למשפט אחד בלי רווחים 
// const obj={};
// console.log(arr2);

// const waza=arr=>{
//   for(let i=0;i<arr.length; i++){
//       if(obj[arr[i]]){
//         obj[arr[i]]++;
//       } else{ 
//         obj[arr[i]]=1
//       }
//   }
//   return obj
// };
// console.log(waza(arr2));





//! const arr2= array.join('').toLowerCase().split(' ').join('').split(''); //  הפיכה למערך אחד בלי רווחים 
// const obj={};
// console.log(arr2);

// const waza=arr=>{
//   for(let i=0;i<arr.length; i++){
//       if(obj[arr[i]]){
//         obj[arr[i]]++;
//       } else{ 
//         obj[arr[i]]=1
//       }
//   }
//   return obj
// };
// console.log(waza(arr2));








// const array = ["Hel", "he  lo"];
// const arr2= array.join('').toLowerCase();
// const obj={};
// console.log(arr2);

// const waza=arr=>{
  //   for(let i=0;i<arr.length; i++){
    //     for(let j=0;j<arr[i].length; j++){
      //       console.log(j);
      //       if(arr[i][0]!==" "){
        //         if(obj[arr[i][0]]){
          //           obj[arr[i][0]]++;
          //         } else{
            //           obj[arr[i][0]]=1
            //         }
            //       }
            //     }
            //   }
            //   return obj
            // };
            // // waza(arr2);
            // console.log(waza(arr2));
            
            
            

            
            
            // const arr2= array.join('').toLowerCase().split(' ').join('').split('');
            // const obj={};
            // console.log(arr2);
            
            // const waza=arr=>{//! in "for of" "i" it's the same to "arr[i]"
            //   for(let i of arr){
            //   // for(let i=0;i<arr.length; i++){
            //       if(obj[i]){
            //         obj[i]++;
            //       } else{ 
            //         obj[i]=1
            //       }
            //   }
            //   return obj
            // };
            // console.log(waza(arr2));







            // const arr2= array.join('').toLowerCase().split(' ').join('').split('');
            // const obj={};
            // console.log(arr2);
            
            // const waza=arr=>{//! in "for of" "i" it's the same to "arr[i]"
            //   for(let i of arr){
            //   // for(let i=0;i<arr.length; i++){
            //       obj[i]?obj[i]++:obj[i]=1
            //   }
            //   return obj
            // };
            // console.log(waza(arr2));




