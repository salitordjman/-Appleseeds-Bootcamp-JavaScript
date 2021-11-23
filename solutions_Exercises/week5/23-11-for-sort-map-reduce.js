//!numbers 100-155 divide by 5
// for (let index = 100; index <= 155; index+=5) {
//   console.log(index);
// }
// for (let index = 155; index >99; index-=5) {
//   console.log(index);
// }

//?numbers 1-145 divide by 6
//!numbers 1-145 divide by 2&3 .זה כמו לרשום מתחלק ב6
// for (let index = 6; index <= 144; index+=6) {
  //   console.log(index);
  // }
  // for (let index = 144; index >5; index-=6) {
    //   console.log(index);
    // }
    
    //!print all numbers 3 digit (100-999)
    //!all print sum digit ===5
    for (let index = 104; index <= 500; index++) {
      let z = index%10;
      let x = Math.floor(index/10%10)
      let y = Math.floor(index/100)
      if(x+y+z===5){
        // console.log(index);
      }
    }//ניתן לחלק את הטווח ולעשות קפיצות של 9 אבל עדיף ככה כי הקוד צריך להיות קריא

      //?print str only letters
      // let str = "faagGGf sEd555# sr5^AW55RTgfgf* dfgdfd$2W32h etre 554iyhy"
      // for (let i = 0; i < str.length; i++) {
      //   if((str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z')){
      //     // console.log(str[i]);
      //   }
      // }
      //?print str only not letters
      let str = "faagGGf sEd555# sr5^AW55RTgfgf* dfgdfd$2W32h etre 554iyhy"
      for (let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt()>=32&&str[i].charCodeAt()<=64){
            // console.log(str[i]);

        }
        // if(!((str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z'))){
        //   console.log(str[i]);
        // }
      }

//!11111111111111111111111111111111111111111111111111111111111
const printToN=(n)=>{
  let prtintNArr=[];
  for (let index = 0; index <=n; index++) {
    prtintNArr.push(index)
        }
    return prtintNArr
  }
  // console.log(printToN(10));
  
  //!22222222222222222222222222222222222222222222222222222

  const countX=(n, t)=>{
    let counter=0
    for (let i = 1; i <=n; i++) {
      if(i%t===0) counter++;
    }
      return counter
    }
    // console.log(countX(122,4));
  
  //!3333333333333333333333333333333333333333
  const countEven=(num)=>{
    let counter=0;
    for ( let i = num; i >0;i=Math.floor(i/10) ) {
      if(i%10%2===0)counter++;
      }
      return counter
    }
  // console.log(countEven(1569));
  //!44444444444444444444444444444444444444444444444
  BeforeNumber = (num) => {
    let counter = 0;
    let arr = Number(num.toString());
    let arr2 = arr
    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      let x=arr[i + 1] + 1;
      if ((x) === arr[i]) {
        console.log(arr[i]);
        console.log(arr[i + 1]);
      }
    }
    return counter;
  };
  
  console.log(BeforeNumber(768841));
  