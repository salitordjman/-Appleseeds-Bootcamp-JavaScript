const obj1 = {
  Name: 'hftrf ryr',
  };
const obj2 = {
  Name: 'wsss srg',
  };
const obj3 = {
  Name: 'tguykty df',
  };

  const mapp =new Map()
  mapp.set(obj1, 51);
  mapp.set(obj2, 52);
  mapp.set(obj3, 53);
  console.log((mapp));
  for (let iMap of mapp){
    // console.log((iMap));
    console.log(Object.keys(iMap[0])+":"+Object.values(iMap[0]));
  }

