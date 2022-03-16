"use strict"

const dadJokesDisplay = $(".dad-jokes");

//get dad-jokes section from DOM

//create elements to append to dom , append elementts to dom
// function createAppendJokes(dadJokeStr) {
//   console.log("dadJokeStr" ,dadJokeStr)
//   for (let i = 1; i <= 10; i++) {
//     dadJokesDisplay.append(`<div>${dadJokeStr}</div>`)
//   }
// }
//voting mechanic

//send api request to dadjokes
async function getDadJokes(evt) {
  const tenJokes = "https://icanhazdadjoke.com/search?limit=10";

    let dadJoke = await axios.get(tenJokes, {
      headers: {
        "Accept" : "application/json"
      }
    });

    dadJoke.data.results.forEach(element => {
      dadJokesDisplay.append(`
      <p>${element.joke}</p>
      <span>0 votes</span>
      <button class="up">🔼</button>
      <button class="down">🔽</button>
      `)
    });
    console.log(dadJoke.data.results);
  };

//return dadJokestr
getDadJokes();
// conductor