const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
  ];
  // for(let lis in listOfNeighbours){
  // for(let lis2 in listOfNeighbours[lis]){
  //   console.log(`Neighbour: ${listOfNeighbours[lis][lis2]}`);
  // }
  // }
  
  
  // for(let lis of listOfNeighbours){
    //   for(let lis2 of lis){
      //     console.log(`Neighbour: ${lis2}`);
      // }
      // }



      for(let lis=0; lis<listOfNeighbours.length; lis++){
      for(let lis2=0; lis2<listOfNeighbours[lis].length; lis2++){
        console.log(`Neighbour: ${listOfNeighbours[lis][lis2]}`);
      }
      }