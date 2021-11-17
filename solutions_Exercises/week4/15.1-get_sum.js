
  function getSum(arr1, arr2){
    //const
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    //return
    return sum
    }
    getSum([1,2,3],[5,66,23]);

    //I use with crhome Sources 
    //Because sum was const is can't change and get new number inside him
    //There was also no return
  