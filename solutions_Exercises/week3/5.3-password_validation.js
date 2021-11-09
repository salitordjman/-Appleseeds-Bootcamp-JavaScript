// let password = a => {
//   if(a.length > 7) {return "Strong";
// } else return "Weak";
// };
// console.log(password('dghdh'));


// let password = a => a.length > 7 ? "Strong" : "Weak";
// console.log(password('dggggghfdh'));


// let password = a => (a.length < 7 && a.length >=0) ? "Weak" : "Strong";
// console.log(password('dghfdh'));
//!
let password = a => (a.length < 7 && "Weak") || "Strong";
console.log(password('dgvvvvvvhfdh'));



// let password = a => (a.length > 7 && a.match(/[A-Z]/g) ? "Very Strong"
// : a.length < 7 ? "Weak" : "Strong");
// console.log(password('dghfssFFshh'));