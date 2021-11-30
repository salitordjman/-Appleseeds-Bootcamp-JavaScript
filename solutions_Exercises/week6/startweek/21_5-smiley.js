const btn =document.querySelector('button');
const inputText= document.querySelector('input');
const h1 = document.querySelector('h1');
const figure = document.querySelector('figure');


btn.addEventListener('click', function(){
    if(inputText.value>0&&inputText.value<100){
      const allImg=document.querySelectorAll('img');
      if(allImg){
    for(let i =0;i<(allImg.length-inputText.value);i++){
      console.log(i);
      allImg[i].remove();
  }}
    for(let i =0;i<(inputText.value-allImg.length);i++){
      console.log(i);
      const newImg= document.createElement("img");
      newImg.src='./img/smile.jfif';
      newImg.classList.toggle("images");
      // newImg.style.width="65px";
      // newImg.style.height="65px";
      // newImg.style.objectFit="cover";
      // newImg.style.marginLeft="5px";
      figure.append(newImg)
  }
  }else{
    h1.innerHTML="only numbers!!!!!!!!!!!"
  }
})