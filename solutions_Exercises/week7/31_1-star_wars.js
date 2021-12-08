let table=document.querySelector(".table");
let output="";
const num=10;
const starWarsData=[];
const planet={};

(function(){
  output= `
  <tr>
    <th>name</th>
    <th>height</th>
    <th>hair</th>
    <th>planet-name</th>
    <th>planet-population</th>
  </tr>
  `;
}())

const getUserGitHub = async (e) => {
  try{
    for(let i=0;i<num;i++){
      const response = await fetch(`https://swapi.dev/api/people/${i+1}/`);
      const data = await response.json();
      const response1 = await fetch(data.homeworld);
      const data1 = await response1.json();
      starWarsData[i]={
        'name': data.name,
        'height': data.height,
        'hair': data.hair_color,
        "planet":{
          'name': data1.name,
          'population': data1.population
        }
      }
    makeTable(starWarsData[i])
    }
  }catch (e){
    table.innerHTML="Errorrrrrrrrrrrrrrrrrrrr"
  console.log("Errorrrrrrrrrrrrrrrrrrrr",e);
}
}

function makeTable(person){
  table.innerHTML+= `
  <tr>
    <td>${person.name}</td>
    <td>${person.height}</td>
    <td>${person.hair}</td>
    <td>${person.planet.name}</td>
    <td>${person.planet.population}</td>
  </tr>
  `;
}
  table.innerHTML+=output
getUserGitHub()
