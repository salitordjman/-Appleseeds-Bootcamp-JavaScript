const maxCount = 1000000;
console.time("My operation")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
  //Perform the operation to be measured multiple times
} console.timeEnd("My operation") // <---- Stops the time


const obj={};

console.time('objjjjjjjj');
for(let i=0; i<=10000;i++){
  obj[i]="rrge";
}
console.timeEnd('objjjjjjjj');

console.time('mapppppppp');

const imap= new Map();
for(let i=0; i<=10000;i++){
  imap.set(i,"rrge")
}
console.timeEnd('mapppppppp');


console.time('mapppppppp1');

const imap1= new Map();
for(let g=0; g<=10000;g++){
  for(let t=0; t<=10000;t++){
  imap.set(t,"rrge")
}
}
console.timeEnd('mapppppppp1');





