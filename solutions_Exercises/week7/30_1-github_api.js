const input= document.querySelector("input");
const btn= document.querySelector("button");
const errMsg= document.querySelector(".error");
let namesdouble=[];
getFocus=()=>{input.focus()}
getFocus()

const getUserGitHub = (e) => {
  errMsg.innerHTML=""
  if(e.key === 'Enter'||e.type ==="click")
   fetch(`https://api.github.com/users/${input.value}`)
  .then((response)=>{
    if(!response.ok){
      errMsg.innerHTML="ERROR- not exsist!!!!"
      throw new Error(`Status Code Error: ${response.status}`);
    } 
    return response.json();
  })
  .then((data)=>{
    if(!namesdouble.includes(data.name)){ 
      console.log(data.html_url);
      let output = `
      <div class='gitHubUsers'>
      <a href="${data.html_url}" target="_blank">
      <img src="${data.avatar_url}">
      <h3>name: ${data.login}</h3>
      <h3>name: ${data.name}</h3>
      <h4>public_repos: ${data.public_repos}</h4>
      </a>
      </div>
      `;
      document.querySelector('div').innerHTML += output;
      console.log(document.querySelector('div'));
      input.value="";
      getFocus()
      namesdouble.push(data.name)
      input.addEventListener("load",getFocus)
    }
    else{
      errMsg.innerHTML="PLS not the same person!!!!"
      input.value="";
      getFocus()
    }
  })
  .catch((e)=>{
    console.log(232232223);
    console.log(e);
    input.value="";
    getFocus()
  });
}

btn.addEventListener("click", getUserGitHub);
input.addEventListener("keypress", getUserGitHub);









// const input= document.querySelector("input");
// const btn= document.querySelector("button");
// const errMsg= document.querySelector(".error");
// let namesdouble=[];
// getFocus=()=>{input.focus()}
// getFocus()
// const getUserGitHub = async (e) => {
//   errMsg.innerHTML=""
//   if(e.key === 'Enter'||e.type ==="click"){ 
//     try{
//       const response = await fetch(`https://api.github.com/users/${input.value}`);
//       if(!response.ok){
//         errMsg.innerHTML="ERROR- not exsist!!!!"
//         throw new Error(`Status Code Error: ${response.status}`);
//       }
//       const data = await response.json();
//       if(!namesdouble.includes(data.name)){ 
//       console.log(data.html_url);
//       let output = `
//       <div class='gitHubUsers'>
//       <a href="${data.html_url}" target="_blank">
//       <img src="${data.avatar_url}">
//       <h3>name: ${data.login}</h3>
//       <h3>name: ${data.name}</h3>
//       <h4>public_repos: ${data.public_repos}</h4>
//       </a>
//       </div>
//       `;
//       document.querySelector('div').innerHTML += output;
//       console.log(document.querySelector('div'));
//       input.value="";
//       getFocus()
//       namesdouble.push(data.name)
//       input.addEventListener("load",getFocus)
//     }else{
//       errMsg.innerHTML="not the same person!!!!"
//       input.value="";
//       getFocus()
//     }
//   }catch (e){
//     console.log("Errorrrrrrrrrrrrrrrrrrrr",e);
//     input.value="";
//     getFocus()
//   }
//   }   
  
// };
// btn.addEventListener("click", getUserGitHub);
// input.addEventListener("keypress", getUserGitHub);