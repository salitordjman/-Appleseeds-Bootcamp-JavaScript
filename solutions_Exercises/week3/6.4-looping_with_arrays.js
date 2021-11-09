
const populations = [1484, 123, 33, 188];

function percentageOfWorld1(population){
  return(((population/7900)*100).toFixed(1))};
  
const populationPercentages = (populations) => {
  let percentages = [];
  for (let i=0; i<populations.length; i++){
    percentages.push(percentageOfWorld1(populations[i]));
  }
  return percentages;
};
  console.log(populationPercentages(populations));
