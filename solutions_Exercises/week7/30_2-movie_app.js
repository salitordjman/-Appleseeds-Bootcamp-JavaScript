const input= document.querySelector("input")
const btn= document.querySelector("button")
const containerEl= document.querySelector(".container")
getFocus=()=>{input.focus()}
const getUserGitHub = async (e) => {
  if(e.key === 'Enter'||e.type ==="click"){ 
    try{
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=34e6fe2a&t=${input.value}`);
      
      if(!response.ok){
        throw Error(`Status Code Error: ${response.status}`);
      }
      const data = await response.json();
      let output = `
      <img src="${data.Poster}">
      <h2>Title: ${data.Title}</h2>
      <h2>Genre: ${data.Genre}</h2>
      <h3>Year: ${data.Year}</h3>
      <h3>Plot: ${data.Plot}</h3>
      <h3>Actors: ${data.Actors}</h3>
      <h3>Director: ${data.Director}</h3>
      `;
      document.querySelector('.container').innerHTML = output;
      (data.Ratings).forEach(rat => {
        const rating=document.createElement("h3");
        rating.innerText=`${rat.Source}:  ${rat.Value}`
        containerEl.appendChild(rating)
        
      });
      input.value="";
      getFocus()
    }catch(e){
      document.querySelector('.container').innerHTML ="ERROR";
      console.log("Errorrrrrrrrrrrrrrrrrrrr",e);
      input.value="";
      getFocus()
    }
  }   
  
};

btn.addEventListener("click", getUserGitHub);
input.addEventListener("keypress", getUserGitHub);
input.addEventListener("load",getFocus)