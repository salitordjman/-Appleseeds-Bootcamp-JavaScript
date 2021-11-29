const h1= document.querySelector('h1');
const sizeMin=6;
const sizeMax=100;
let size = parseInt(window.getComputedStyle(h1).fontSize);
const plus =document.querySelector('button');
const minus= document.querySelector('div :last-child');
window.addEventListener('keypress', function(e){
    if(e.key === '+'&&size<=sizeMax) {
     h1.style.fontSize=`${size++}px`
    } else if(e.key === '-'&&size>=sizeMin) {
     h1.style.fontSize=`${size--}px`;
    }
})
const plusMinus = document.querySelectorAll("button")
plusMinus.forEach(plMi => {
    plMi.addEventListener('click', function(){
        if(plMi.innerHTML==="+"&&size<=sizeMax){
            h1.style.fontSize=`${size++}px`
        } else if(plMi.innerHTML==="-"&&size>=sizeMin){
            h1.style.fontSize=`${size--}px`;
        }
    })
});
