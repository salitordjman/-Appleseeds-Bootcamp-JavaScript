const obj1 = {
  Name: 'hftrf ryr',
  };
const obj2 = {
  Name: 'wsss srg',
  };
const obj3 = {
  Name: 'tguykty df',
  };

  const mapp = new Map()
  mapp.set(obj1, 1);
  mapp.set(obj2, 2);
  mapp.set(obj3, 3);
  console.log((mapp));
  for (let iMap of mapp){
    console.log(Object.keys(iMap[0])[0]+":"+Object.values(iMap[0])[0]);
  }

