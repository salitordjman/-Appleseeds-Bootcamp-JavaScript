const numbers = [1, -5, 666, 2, 400, 11];
const ascSort =arr=>{ 
// arr.slice().sort((a, b) => a - b);
return arr.sort((a, b) => a - b)
}
console.log(ascSort(numbers));
const descSort =arr1=>{ 
  // const descSort = arr.slice().sort((a, b) => b - a);
  return arr1.sort((a, b) => b - a);

}
console.log(descSort(numbers));
