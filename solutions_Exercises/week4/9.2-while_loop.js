
const populations = [1484, 123, 33, 188];

function percentageOfWorld1(population){
  return(((population/7900)*100).toFixed(1))};
  
const populationPercentages = (populations) => {
  let percentages = [];
  let i=0
  while(i<populations.length){
    percentages.push(percentageOfWorld1(populations[i]));
    i++;
  }
  return percentages;
};
  console.log(populationPercentages(populations));

  //For me it`s better for this task: the for loop;
