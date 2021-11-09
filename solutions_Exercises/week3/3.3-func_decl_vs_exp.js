// 1.2.

function percentageOfWorld1(population) {
  return(((population/7900)*100).toFixed(1))};
console.log(percentageOfWorld1(1441));

// 3.
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(8));
console.log(percentageOfWorld1(3456));

// 4.
const percentageOfWorld2 = function(population) {
  return(((population/7900)*100).toFixed(1))};
  console.log(percentageOfWorld2(1441));


const percentageOfWorld2 = population => {
  return(((population/7900)*100).toFixed(1))};
  console.log(`It's about ${percentageOfWorld2(1441)}% of the world population`);
