var library = [
  {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: ['true'],
  readingStatus1: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: ['true'],
  readingStatus1: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: ['false'],
  readingStatus1: false
  }
  ];
const readdd=()=>{
  const readingStat= library.filter(b => b.readingStatus.includes('true'))
return readingStat
}
const readdd1=()=>{
  const readingStat= library.filter(b => b.readingStatus1)
return readingStat
}


  console.log(readdd());
  console.log(readdd1());
  