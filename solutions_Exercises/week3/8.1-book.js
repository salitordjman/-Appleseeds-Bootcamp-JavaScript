const book = {
name: 'Harry Potter',
Author:	'J. K. Rowling',
Published: '26 June 1997',
Language:	'English',
Genre:	'Fantasy'
};
const whatBook= (book) =>{
  return `The book ${book.name} was written by ${book.Author} in
  the year ${book.Published}`
}
console.log(whatBook(book));