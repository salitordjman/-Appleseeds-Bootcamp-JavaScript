document.querySelector('button').addEventListener('click', getJoke);

 async function getJoke(){
  const res = await fetch('https://api.jokes.one/jod');
  const data= await res.json()
  const jokeMemory=data.contents.jokes[0].joke
    console.log(jokeMemory.title);
    console.log(jokeMemory.text);
     const output = `
        <div>
          <h2>${jokeMemory.title}</h2>
          <h3>${jokeMemory.text}</h3>
        </div>
      `;
    document.querySelector('div').innerHTML = output;
}
