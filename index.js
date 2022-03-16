"use strict"

const dadJokesDisplay = $(".dad-jokes");

//get dad-jokes section from DOM

//create elements to append to dom

//append elementts to dom

//voting mechanic

//send api request to dadjokes
async function getDadJokes(evt) {
  const tenJokes = "https://icanhazdadjoke.com/slack";
  const limit = 10;

  const dadJokes = await axios.get(tenJokes);

  console.log(dadJokes.data);
}
getDadJokes();
// conductor