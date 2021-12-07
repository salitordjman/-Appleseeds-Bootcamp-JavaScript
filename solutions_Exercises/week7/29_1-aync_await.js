const getIDs = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([532, 543, 753, 1, 5]);
  }, 1500);
});

const getRecipe = (recipeID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: "Fresh tomato pasta",
          publisher: "Pinchas Hodadad",
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recipeID
    );
  });
};

(async function printIDs(){
  try{
    let IDs= await getIDs()
    printRecipe=await getRecipe(IDs[2])
    console.log(IDs);
    console.log(printRecipe5);
  }catch(e){
console.log('ERROR!!!!!!!!!!!!!!!!!!!!!!!!!',e);
  }
}())
