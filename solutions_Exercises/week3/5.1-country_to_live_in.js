const countryToLiveIn =(language, isIsland, population, country)=>{
  if(language=='English' && population<50000000 && !isIsland){
    console.log(`You should live in ${country}`);
  } else{
    console.log(`${country} does not meet your criteria`);
  }
}
countryToLiveIn("English", false, 1000000, "fvdfv");