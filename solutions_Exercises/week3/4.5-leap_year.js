let leap = a =>{
  if(a%4===0){
    if(a%100===0){
      if(a%400===0){
        console.log("It is indeed a leap year")
      }else{
        console.log("This is not a leap year.")
      }
    }else{
      console.log("It is indeed a leap year")
    }
  }else{
    console.log("This is not a leap year.")
  }
}
leap(2400)