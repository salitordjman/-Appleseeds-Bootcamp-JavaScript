// const h1 = document.createElement('h1');
// document.body.append(h1)
// const btn =document.querySelector('.btn');
// const inputText= document.querySelector('input');
// h1.innerHTML="Enter your age"
// btn.addEventListener('click', function(){
//   if(inputText.value>0&&inputText.value<160){
//   inputText.value>18 ? h1.innerHTML="you can drink appear" : h1.innerHTML="you’re too young"
//   }else{
//     h1.innerHTML="only numbers"
//   }
// })

const h1 = document.createElement('h1');
document.body.append(h1)
const btn =document.querySelector('.btn');
const inputText= document.querySelector('input');
h1.innerHTML="Enter your age"
btn.addEventListener('click', function(e){
  console.log(e);
  console.log(e.target);
  if(inputText.value>0&&inputText.value<160){
    inputText.value>18 ? h1.innerHTML="you can drink appear" : h1.innerHTML="you’re too young"
  }else{
    h1.innerHTML="only numbers"
  }
})

window.addEventListener('keypress', function(e){
  console.log(e);
  console.log(e.target);
  console.log(e.key);
  console.log(e.target.key);
  if (e.key === 'Enter') {
    if(inputText.value>0&&inputText.value<160){
      inputText.value>18 ? h1.innerHTML="you can drink appear" : h1.innerHTML="you’re too young"
      inputText.value>18 ? inputText.placeholder="you can drink appear" : inputText.placeholder="you’re too young"
      inputText.value>18 ? inputText.value="you can drink appear" : inputText.value="you’re too young"
    }else{
      h1.innerHTML="only numbers"
    }
  }
})



