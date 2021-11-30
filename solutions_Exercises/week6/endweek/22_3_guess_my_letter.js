// 1.HTML 
	
// 	H1 - title Welcome to guess my letter
// 	Div - border CSS - will hold the correct guess or ?
// 	P - innerText change according to guess *color black
// 	Div - letters guessed - change when game ends
// 	Button/div - hidden until game ends
// 	Div - wrong letters guessed
	
// 2.JS
	
// 	-Write an array for including every letter in the alphabet
// 	-Empty array for the wrong guesses
	
// 	-Generate a random letter -  store it in a variable - hidden in the first div
// 	-Listen for an input from the user (keypress) store it
// 	-check if the input is a letter 
// 		If the key is not a letter
// 		Change ‘p’ to ‘please enter a valid letter’ * in red

// 	-else if the key is a letter...
// 	-letter to lower case

// 		*If not the correct letter

// 			Check if the empty array includes the current letter
// 				If yes p = ‘letter has already been guessed’ *in red
				
// If not insert the letter into the ‘wrong letters array’ 
// & p = ‘nope, ‘wrong letter’ *in red

// *If it is the right letter continue

// P = ‘Right letter’ in green

// ChaChange question mark to the inputted letter
// Wrong letters div = would you like to play again?
// Yes button - visible 
// Pause all else - wait for  yes click 

// 	When ‘yes’ button is clicked reset all



//* pasudo:
//html:
//כותרת- לא משתנה
//!h1- no change
//סימן שאלה - משתנה אם צודק
//! ?-change if guess right
//ניחוש אות- משתנה אם לא בחר אות, אם חזר על אות,אם ניחש לא נכון ואם ניחש נכון
//! p-change if not choose a letter, if repeat on the same letter, if guess wrong, if guess right
// כותרת אותיות שנוחשו- משתנה אם צדק
//! keys guessed -change only if guess right
// אותיות שנוחשו-  נמחק אם צדק ובמקום נכנס כפתור 
//! letter list guessed -delete only if guess right, and come button
//JS:
//!js
//בחירת אות רנדומלית
//! choosing random letter
//אם זה אות או משהו אחר
//! check if its a letter or samesing alse
//אם משהו אחר- הודעה אדומה
//! if is samesing alse - red massage
// אם זה אות- אם צדק, אם טעה, אם כבר נוחש
//! if is a letter - if right, if wrong, if already gussed
//אם טעה- הודעה אדומה
//! if wrong- red massage
//אם כבר נוחש - להוסיף לרשימה + כותרת אדומה
//! if already gussed- add to the list+ red massage
//אם צדק- לעצור אירוע+במקום? להוסיף אות, הודעה ירוקה,למחוק רשימת אותיות + כותרת אותיות, לשאול אם רוצה שוב+כפתור
//!if right-stop event, replace("?") in the right letter, green massage, delete list gusse+ massage gusse, ask if he want to play again+ button. 
//אם לחץ על כפתור לאתחל את הכל
//! if press the button- reset all

//!? 222222222222222222222222222222222222222222222222222222222222222222222222222
const p= document.querySelector("p");
const h2= document.querySelector("h2");
const playAgain= document.querySelector('section div:last-of-type');
const btn= document.querySelector('button');
const divLetter= document.querySelector('div');
const letterWrong=[];
let stopFunc=1;


function randomLetter(){
  return String.fromCharCode(Math.floor((Math.random()*26)+97));
}
function restartFunc(){
  window.addEventListener('keypress', startFunc)
  p.style.color="black";
  p.style.fontWeight="lighter";
  p.innerHTML="Guess a letter"
  playAgain.innerHTML="Keys gussed";
  btn.style.visibility="hidden";
  divLetter.innerHTML="?";
}

function rightGuessFunc(char){
  stopFunc=0;
  p.innerHTML="Right letter!!";
  p.style.color="green";
  p.style.fontWeight="bold";
  playAgain.innerHTML="Would you like to play again?";
    divLetter.innerHTML=char;
    btn.style.visibility="visible";
    h2.innerHTML=[];
}
function clickedBtnFunc(){
  btn.addEventListener('click', function(){
    restartFunc()
    stopFunc=1;
  })
}
function wrongLetterFunc(char){
  if(letterWrong.includes(char)){
    p.innerHTML=`${char} has already been guessed`;
    p.style.color="red";
    p.style.fontWeight="bold";
  } else{
    p.innerHTML='Nope, wrong letter';
    p.style.color="red";
    p.style.fontWeight="bold";
    letterWrong.push(char);
    h2.innerHTML=letterWrong;
  }
}

function startFunc(e){
  const char= e.key.toLowerCase();
  if(stopFunc){
  if (char>='a'&&char<='z'&&char.length===1) {
    if(char===randomLetter()){
      rightGuessFunc(char)
      clickedBtnFunc()
      } else{
        wrongLetterFunc(char)
      }
    }else{
      p.innerHTML="only a-z!!!!!";
      p.style.color="red";
      p.style.fontWeight="bold";
    } 
  }
  }
restartFunc()






// //!? 1111111111111111111111111111111111111111111111111111111111111111111111111
// const p= document.querySelector("p");
// const h2= document.querySelector("h2");
// const playAgain= document.querySelector('section div:last-of-type');
// const btn= document.querySelector('button');
// const randomLetter= String.fromCharCode(Math.floor((Math.random()*2)+97));
// const divLetter= document.querySelector('div');
// //26
// const letterWrong=[];

// window.addEventListener('keypress', function myFunc(e){
//   const char= e.key.toLowerCase();
//     if (char>='a'&&char<='z'&&char.length===1) {
//       if(char===randomLetter){
//         p.innerHTML="Right letter!!";
//         p.style.color="green";
//         p.style.fontWeight="bold";
//         playAgain.innerHTML="Would you like to play again?";
//         divLetter.innerHTML=char;
//         btn.style.visibility="visible";
//         h2.innerHTML=[];
//         this.removeEventListener('keypress', myFunc);
//         btn.addEventListener('click', function(){
//           window.addEventListener('keypress', myFunc)
//           p.style.color="black";
//           p.style.fontWeight="lighter";
//           p.innerHTML="Guess a letter"
//           playAgain.innerHTML="Keys gussed";
//           btn.style.visibility="hidden";
//           divLetter.innerHTML="?";
//         })
//       } else{
//         if(letterWrong.includes(char)){
//           p.innerHTML=`${char} has already been guessed`;
//           p.style.color="red";
//           p.style.fontWeight="bold";
//         } else{
//           p.innerHTML='Nope, wrong letter';
//           p.style.color="red";
//           p.style.fontWeight="bold";
//           letterWrong.push(char);
//           h2.innerHTML=letterWrong;
//         }
//       }
//       }else{
//         p.innerHTML="only a-z!!!!!";
//         p.style.color="red";
//         p.style.fontWeight="bold";
//       } 
// })
