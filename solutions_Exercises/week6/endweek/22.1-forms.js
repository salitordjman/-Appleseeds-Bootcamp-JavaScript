//* pseudo:
// form with name, age and email
// click submit- open textbox with the all information- confirm
//click confirm- masssage
//clicks change information- change the information and ask again for onfirmation.
const forms=document.querySelector("form");
const btnSendInfoEl= forms.lastElementChild;
const nameEl= document.querySelector("input");
const ageEl= document.querySelector('label :nth-child(2)');
const mailEl= document.querySelector('label :nth-child(3)');
const textBox=document.querySelector('span');
const h2= document.querySelector('h2');
const btnConfirmInfoEl= document.querySelector('button');
const btnCangeInfoEl= document.querySelector('span :last-child');
const allImg=[];



function msgOrChange(e){
  btnConfirmInfoEl.style.display = "none";
  btnCangeInfoEl.style.display = "none";
  if(e.target.outerText==="confirm"){
  h2.style.color="yellow";
  h2.innerHTML="congratulations you successfully sent this form!!!";
  } else{
    textBox.style.display = "none";
    restartFunc()
  }
}
function alertFunc(e){
  e.preventDefault();
  textBox.style.display = "block";
  btnConfirmInfoEl.style.display = "block";
  btnCangeInfoEl.style.display = "block";

  [nameEl,ageEl,mailEl].forEach((input,i) => {
    allImg[i]=input.name + ": "+ input.value + "<br>";
  });
  // for(let input of [nameEl,ageEl,mailEl]){
  //   allImg.push(input.name + ": "+ input.value + "<br>");
  // }
  h2.innerHTML=allImg;
}
function restartFunc(){
  btnSendInfoEl.addEventListener('click', alertFunc)
  btnConfirmInfoEl.addEventListener('click', msgOrChange)
  btnCangeInfoEl.addEventListener('click',msgOrChange)

}
  restartFunc()