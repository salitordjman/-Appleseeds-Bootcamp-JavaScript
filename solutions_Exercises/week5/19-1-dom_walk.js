//! 11111111111111111111111111111111111111111111111111111111111111

// const uls =document.querySelectorAll("ul");
// const liNew =uls[1].querySelector("li:nth-child(2)");
// liNew.innerText="main title"
const liStartHere =document.querySelector('li.start-here')
// console.log(liStartHere);
liStartHere.innerText="main title"

//!222222222222222222222222222222222222222222222222222222222222222
// const extraLi = document.createElement('li');
// extraLi.innerText="sub title 4"
// const uls = document.querySelectorAll("ul");
// uls[1].append(extraLi)

// uls[1].appendChild(extraLi)


const extraLi = document.createElement('li');
extraLi.innerText="sub title 4"
const uls = document.querySelectorAll("ul");
const firstLi = uls[1].querySelector("li:last-child");
firstLi.insertAdjacentElement('afterend',extraLi)



//!3333333333333333333333333333333333333333333333333333333333333333

// const liS =document.querySelector("li");
// liS[7].remove()

const liS =document.querySelector("ul");
liS.lastElementChild.remove()

//!444444444444444444444444444444444444444444444444444444444444444444
const title=document.querySelector("title");
title.innerText='Master Of The Dom'
// console.dir(title);


//!55555555555555555555555555555555555555555555555555555555555555555

const p=document.querySelector("p");
p.innerText='bla bla blalalala'




