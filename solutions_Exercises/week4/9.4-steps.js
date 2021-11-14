const oneArgument =N=>{
  let matrix=[];

  // for(let i=0; i<N; i++){
  //   matrix[i]=[];
  //   for(let j=0; j<N;j++){
  //     i>=j ? (matrix[i][j]='#') : (matrix[i][j]=' ');
  //   }
  // }


  for(let i=1; i<=N; i++){
    matrix[i]='#'.repeat(i)+' '.repeat(N-i)
  }


  
  
  return matrix
  
};
console.log(oneArgument(3));