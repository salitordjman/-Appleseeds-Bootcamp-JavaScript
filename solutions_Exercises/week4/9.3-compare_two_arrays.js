const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];
const fooddy= (arr1,arr2)=>{
  let tarr=[];
  for (let fo in food){
    for (let fo1 in food1){
      if(food[fo]===food1[fo1]){
        tarr.push(food[fo]);
      }
    }
  }
  return tarr.length ? tarr : "none"
 
};
console.log(fooddy(food,food1));
