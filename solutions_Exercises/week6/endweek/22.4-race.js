//* pseudo:
//JS:
//!js
//קריאה לארוע אחד ולהקצות לכל שחקן מקש משלו
//! call one event, any player have is key
//  מעבר קלאס מאחד לשני ע"י טיגל ופור לופ
//! the game- move from class to outer with for and toggle
//כאשר שחקן מגיע לסוף נפתח חלון ומכריז על הזוכה ושואל אם רוצים לשחק שוב
//! the player that come to the end he is the winner, open window that say he is the winnner and if tham want to play again
// אם כן איפוס וקריאה מחדש לפונק'
//! if yes than clear all and call again to the func
//לרשום דברים שיכולים להשתבש
const allTdPlayer1=document.querySelectorAll("#player1-race td");
const allTdPlayer2=document.querySelectorAll("#player2-race td");
const textBox=document.querySelector('section');
const h2=document.querySelector("h2");
const btn=document.querySelector("button");
let iOne=1;
let iTwo=1;
// let check=0;


function moveCarBack(playerRoad){
  playerRoad.forEach((element,i)=>{
    if(i===0&&!element.className){
      element.classList.toggle("active");
    }
    if(element.className&&element.className!="finish"&&i>0){
      element.classList.remove("active");
    }
  });
}
function startAgain(){
  // h2.innerHTML=``;
  textBox.style.display = "none";
  iOne=1;
  iTwo=1;
  moveCarBack(allTdPlayer1);
  moveCarBack(allTdPlayer2);
  // check=0;
  document.body.addEventListener("keyup",raceStart);
}
function raceMove(iBoth,player){
    player[iBoth-1].classList.toggle("active");
    player[iBoth].classList.toggle("active");
    if(iBoth===player.length-1){
      iOne>iTwo?player=1:player=2;
      h2.innerHTML=`congratulation!!!!<br>The winner is player number ${player}!!!!`;
      textBox.style.display = "block";
      btn.addEventListener("click",startAgain);
      // check++;
      document.body.removeEventListener('keyup', raceStart);
    }
   return ++iBoth
}
//! 1)
function raceStart(e){
  // if(!check){
    if(e.key==='ArrowRight'&&iOne<allTdPlayer1.length){
      iOne=raceMove(iOne,allTdPlayer1);
    } else if(e.code==="Space"&&iTwo<allTdPlayer2.length){
      iTwo=raceMove(iTwo,allTdPlayer2);
    }
  // }
}

document.body.addEventListener("keyup",raceStart);

//! 1) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 6) create two varaible that represent the two players
//! 1) create two varaible that represent the two players
//! 8) create two varaible that represent the two players
