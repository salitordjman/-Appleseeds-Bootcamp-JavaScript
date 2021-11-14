// function console1(str3){
// //  console.log(str3);
//  return console.log(str3);
// };
// function isString(str,callback){
//   // ((typeof str==='string')?callback(str): callback("No str"))
//   // callback((typeof str==='string')?str: "No str")
//   return callback((typeof str==='string')?str: "No str")
// };
// isString('hhhhh',console1)




// function dashes(str3){
//   // return str3.replace(/ /g,"-")
//   return str3.split(" ").join('-')
// }
// function dashes(str3){
//   return str3.repeat(11)
// }

// function firstWordUpperCase(str,callback){
//   // return callback(str.replace(str[0],str[0].toUpperCase()))
//   return callback(str[0].toUpperCase()+str.slice(1))
// };
function db(ar1){
  return ar1-6;
}
function da(ar){
  return console.log(ar/4);
}

function firstW(int1,int2,callback,ccd){
  // return callback(str.replace(str[0],str[0].toUpperCase()))
  return (callback(int1*int2),ccd(int1+int2))
};

console.log(firstW(6,4,da,db))