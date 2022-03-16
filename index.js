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
  const tenJokes = "https://icanhazdadjoke.com/slack";
  for(let i = 1; i <= 10; i++){
    let dadJoke = await axios.get(tenJokes)
    //data.attachments[0].fallback;
    dadJokesDisplay.append(`<div>${dadJoke.data.attachments[0].fallback} </div>`)
  }
  console.log(dadJokeStr)
  createAppendJokes(dadJokeStr)
}
//return dadJokestr
getDadJokes();
// conductor