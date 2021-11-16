const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25,
  genres: ['fiction', 'fantasy']
},
{
  title: 'Changing My Mind',
  authors: ['Zadie Smith'],
  rating: 3.83,
  genres: ['nonfiction', 'essays']
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42,
  genres: ['fiction', 'graphic novel', 'fantasy']
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11,
  genres: ['fiction', 'fantasy']
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36,
  genres: ['fiction', 'historical fiction']
},
{
  title: 'The Name of the Wind',
  authors: ['Patrick Rothfuss'],
  rating: 4.54,
  genres: ['fiction', 'fantasy']
},
{
  title: 'The Overstory',
  authors: ['Richard Powers'],
  rating: 4.19,
  genres: ['fiction', 'short stories']
},
{
  title: 'A Truly Horrible Book',
  authors: ['Xavier Time'],
  rating: 2.18,
  genres: ['fiction', 'garbage']
},
{
  title: 'The Way of Kings',
  authors: ['Brandon Sanderson'],
  rating: 4.65,
  genres: ['fantasy', 'epic']
},
{
  title: 'Lord of the flies',
  authors: ['William Golding'],
  rating: 3.67,
  genres: ['fiction']
}
]
//!111111111111111111111111-------------------------


const extractOnlyValue=(key,obj)=>{

  const value=obj.reduce((arrTotal,currentVal,ind)=>{
      // arrTotal[ind]=currentVal[key];
      arrTotal.push(currentVal[key]);
  return arrTotal
    },[]);
      return value

}
console.log(extractOnlyValue("authors",books));


//!222222222222222222222222222-------------------------

const countOnlyVowels=(str)=>{

  const vowel12=str.toLowerCase().split('').reduce((arrTotal,currentVal)=>{
    if(['a','e','i','o','u'].includes(currentVal)){
      arrTotal[currentVal]=((arrTotal[currentVal]||0)+1);
  }
  return arrTotal
    },{});
      return vowel12
}
console.log(countOnlyVowels('fauAafr aaiiaeeeoorry'));


//!333333333333333333333333333-------------------------



const addKeyAndValue=(obj,key,val)=>{
  const value=obj.reduce((arrTotal,currentVal,ind)=>{
    currentVal[key]=val;
    //  arrTotal[ind]=currentVal;
    arrTotal.push(currentVal);
    return arrTotal
    },[]);
    return value

}
console.log(addKeyAndValue(books,"gfdr","dali lama"));



