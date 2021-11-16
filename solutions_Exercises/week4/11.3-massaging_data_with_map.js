const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
  },
  },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
  },
  },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
  },
  },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
  },
  },
  ];
//!-11111111111111111111---------------------------
  const funcName=arr=>{
    const namea= arr.map((b)=>{
      return b.name;
    })
  return namea
  }
  console.log(funcName(data));

  // const before1990=arr=>{
  //   const nine= arr.map(function(b){
  //     let bnew=parseInt(b.birthday.split('').slice(b.birthday.length-4).join(""))
  //     if(bnew<1990){return b;}
  //   })


//!2222222222222-------------------------------------


  const before1990=arr=>{
    let co=0;
    let nine={};
    arr.forEach(function(b){
      // let bnew=parseInt(b.birthday.split('').slice(b.birthday.length-4).join(""))
      let bnew=parseInt(b.birthday.split('-').slice(b.birthday.split('-').length-1))
      
      if(bnew<1990){
          nine[co]=b;
          co++;
        }
    })
   
  return nine
  }
  console.log(before1990(data));

//!33333333-----------------------------------------


const differentFoods=arr=>{
  let fave={};
  // arr.forEach((b) => {
  //   for(let cc=0;cc<b.favoriteFoods.meats.length;cc++){
  //     //  fave[b.favoriteFoods.meats[cc]]=(fave[b.favoriteFoods.meats[cc]]?++fave[b.favoriteFoods.meats[cc]]:1)
  //      fave[b.favoriteFoods.meats[cc]]=fave[b.favoriteFoods.meats[cc]]+1|| 1;
  //   };
  // }); 
  // arr.forEach((b) => {
  //   for(let cc=0;cc<b.favoriteFoods.fish.length;cc++){
  //      fave[b.favoriteFoods.fish[cc]]=(fave[b.favoriteFoods.fish[cc]]?fave[b.favoriteFoods.fish[cc]]+=1:1)
  //   };
  //     }); 
  arr.forEach((b) => {
    b.favoriteFoods.meats.forEach((cc) => {
       fave[cc]=fave[cc]+1|| 1;
      });
      b.favoriteFoods.fish.forEach((dd) => {
        fave[dd]=fave[dd]+1|| 1;
      });
  }); 
      return fave
    }


console.log(differentFoods(data));

