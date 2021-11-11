const book1 = {
  Name: 'hftrf ryr',
  Author:	'frff tuyuu',
  Year: '1953',
  };
const book2 = {
  Name: 'wsss srg',
  Author:	'ssv sdfdee',
  Year: '1920',
  };
const bookUtils = {
  getFirstPublished(a,b) {
    return a['Year'] < b['Year'] ? a.Name : b.Name;
    },
  setNewEdition(book,editionYear){
    book.latestEdition = editionYear;
  },
  setLanguage(book,language){
    book.setLanguage = language;
  },
  setTranslation(book,language,translator){
    book.setTranslation = [translator,language];
  },
  setPublisher(book,name,location){
    book.publisher = {name,location};
  },
  isSamePublisher(a,b){
    return (a['publisherName']===b['publisherName'])&&(a['location']===b['location']);
  }
};
console.log(bookUtils.isSamePublisher(book1,book2));
  
  