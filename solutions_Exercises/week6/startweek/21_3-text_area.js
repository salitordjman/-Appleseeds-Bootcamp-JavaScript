const btn =document.querySelector('button');
const inputText= document.querySelector('textarea');
const noticeOn= document.querySelector('div');
const h1=document.querySelector('h1');
const exitNotice=document.querySelector('span');
const minText=100;
btn.addEventListener('click', function(){
  if(inputText.textLength<minText){
    h1.innerHTML=`Use at least ${minText} characters`
    noticeOn.style.display = "block";
  }else{
    
  }
})
exitNotice.addEventListener('click', function(){
    noticeOn.style.display = "none";
})