// let a1 = 'jhon'; 
// let b1 = 'mike';
// let avg = (a,b,c)=>(a+b+c)/3;
// let win = (a,b)=>{
//   if (a>b){
//     console.log(`the winner is ${a1} team and avarege is ${a}`);
//   } else if (a<b){
//     console.log(`the winner is ${b1} team and the avarege is ${b}`);
//   }else if (a===b){
//     console.log(`play again`);
//   }
// }
// let jhon1 = avg(89,120,103);
// let mike1 = avg(116,94,123);
// let winnner = win(jhon1,mike1);

let a1 = 'jhon'; 
let b1 = 'mike';
let c1 = 'meri';
let avg = (a,b,c)=>(a+b+c)/3;
let win = (a,b,c)=>{
  if (a>b && a>c){
    console.log(`the winner is ${a1} team and avarege is ${a}`);
  } else if (b>a && b>c){
    console.log(`the winner is ${b1} team and the avarege is ${b}`);
  } else if (c>a && c>b){
    console.log(`the winner is ${c1} team and the avarege is ${c}`);
  }else if (a===b && a===c){
    console.log(`play again`);
  }
}
let jhon1 = avg(89,120,103);
let mike1 = avg(116,94,123);
let meri1= avg(97,134,105);
let winnner = win(jhon1,mike1,meri1);
