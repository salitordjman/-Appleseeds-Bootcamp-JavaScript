// const arr = ['ssd', 'sgs', 'gfyyyjh', 'btgf656', 'zdfffds', 'fdtyjhyujuy'];
const arr = [1,2,3,4,5,8,9,11,21,22,52];
//! Array- כי אני מקבל מערך
Array.prototype.MyFilter= function(callback){
  const newArray=[];
  for(let i=0;i<this.length;i++){
    //! this----- arr
    //!callback------conditionFunc
    //!this[i]-------- element[i]
    //!callback(this[i])--------true/false
    // console.log(this);
    // console.log(callback);
    // console.log(this[i]);
    // console.log(callback(this[i]));
    if(callback(this[i])){
    newArray.push(this[i])
    }
  }
  return newArray;
  }

  const result=arr.MyFilter((conditionToOtherFunc)=>conditionToOtherFunc%2===0);

  // const result=arr.MyFilter((conditionToOtherFunc)=>{
  //   return (conditionToOtherFunc%2===0)
  // });

  // const result=arr.MyFilter(function(conditionToOtherFunc){
  //   return conditionToOtherFunc.length > 6
  // });
  // console.log(result);
  
  //!222222222222222222222222222222222222222222222222222222222222222222222222
  
  const arr1 = [2,3,4,5,8,9,11,21,22,52];
  Array.prototype.MyFind= function(callback){
    let sum='';
    for(let i=0;i<this.length;i++){
      sum+=this[i];
      if(callback(this[i])){
        return this[i]
      }
    }
  }
    const result1=arr1.MyFind((conditionToOtherFunc)=>conditionToOtherFunc>6);
    // console.log(result1);
    //!33333333333333333333333333333333333333333333333333333333333333333

    const arr2 = [2,3,4,5,10,6];
    Array.prototype.MyReduce= function(callback,start){
      let total=start||0
      for(let i=0;i<this.length;i++){
        console.log(total);
        // console.log(callback(total+=this[i]));
        total=callback(total, this[i]);
      }
      return total
    }
      const result2=arr2.MyReduce(((previousValue, currentValue) => previousValue + currentValue),10);
      console.log(result2);