document.querySelector('button').addEventListener('click', getJoke);

 function getJoke(){
  fetch('https://api.jokes.one/jod')
  .then((res) => res.json())
  .then((data) => {
  // .then((data) => {
    console.log(data);
    let jokeMemory=data.contents.jokes[0].joke
    console.log(jokeMemory.title);
    console.log(jokeMemory.text);
     let output = `
        <div>
          <h2>${jokeMemory.title}</h2>
          <h3>${jokeMemory.text}</h3>
        </div>
      `;
    document.querySelector('div').innerHTML = output;
  })
}
