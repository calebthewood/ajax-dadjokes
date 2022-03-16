"use strict"

const dadJokesDisplay = $(".dad-jokes");

//get dad-jokes section from DOM

//create elements to append to dom

//append elementts to dom

//voting mechanic

//send api request to dadjokes
async function getDadJokes(evt) {
  const tenJokes = "https://icanhazdadjoke.com/slack";
  const dadJoke = await axios.get(tenJokes);
  return  dadJoke.attachments[0].fallback;
}
getDadJokes();
// conductor