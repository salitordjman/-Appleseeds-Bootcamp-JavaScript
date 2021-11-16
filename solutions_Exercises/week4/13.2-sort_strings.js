//!aaaaaaaaaaaaaaaaaaaaaaaaaaaa---------------------------
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const ascSort =arr=>{ 
return arr.slice().sort();
}
console.log(ascSort(foods));


const descSort =arr1=>{ 
return arr1.slice().sort().reverse();
}
console.log(descSort(foods));

//!bbbbbbbbbbbbbbbbbbbbbbbbbbbbb---------------------------

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

// console.log(foodsWithUpperCase[0][0]);
const ascSort1 =arr=>{ 
  return arr.slice().sort((a,b)=>(a.toLowerCase().localeCompare(b.toLowerCase())));
}
console.log(ascSort1(foodsWithUpperCase));


const descSort1 =arr1=>{ 
  let arrr1 =arr1.slice().sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase())
  });
  return arrr1.reverse()
}
console.log(descSort1(foodsWithUpperCase));

//!bbbbbbbbb---newwwwwww-only with the first letter-----

const foodsWithUpperCase1 = [
  'falafel',
  'Sabich',
  'sbich',
  'hummus',
  'pizza with extra pineapple',
];

// foodsWithUpperCase[0][0]
const ascSort1a =arr=>{ 
  return arr.slice().sort((a,b)=>(a.toLowerCase().localeCompare(b.toLowerCase())));
}
console.log(ascSort1a(foodsWithUpperCase1));


const descSort1a =arr1=>{ 
  let arrr1 =arr1.slice().sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase())
  });
  return arrr1.reverse()
}
console.log(descSort1a(foodsWithUpperCase1));

//!bbb newww by 1 letter----------------------

// // foodsWithUpperCase[0][0]
const ascSort1aa =arr=>{ 
  return arr.slice().sort((a,b)=>(a[0].toLowerCase().localeCompare(b[0].toLowerCase())));
}
console.log(ascSort1aa(foodsWithUpperCase1));

const ascSort1aa11 =arr=>{ 
  return arr.slice().sort((a,b)=>(a.toLowerCase().charCodeAt(0)-b.toLowerCase().charCodeAt(0)));
}
console.log(ascSort1aa11(foodsWithUpperCase1));


// const descSort1aa =arr1=>{ 
//   let arrr1 =arr1.slice().sort((a,b)=>{
//     return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
//   });
//   return arrr1.reverse()
// }
// console.log(descSort1aa(foodsWithUpperCase1));




// //!cccccccccccccccccccccccccccc---------------------------

// const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

// const LongestWord= arr=>{
//   // return arr.sort((a,b)=> a.length-b.length);
//   return arr.sort((a,b)=> a.length-b.length).reverse();
// }
// console.log(LongestWord(words));

