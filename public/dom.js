const submit = document.getElementById("submitButton");
const sexySanta = document.getElementById("sexySanta");
// const genButton = document.getElementById("genButton");
const loadResults = document.getElementById("loadingSanta");

const sexyFunc = () => {
  console.log("func!");
  sexySanta.src = "https://media.giphy.com/media/3miUqUEZvAbEwXtfRk/giphy.gif";
}

// const loading = () => {
//   console.log("triggered loading");
  // const redirect = () => {
  //   window.location = "/results";
  // }
  // setTimeout(redirect, 3000);
// }
// const rollingFunc = () => {
//   console.log("func!");
//   sexySanta.src = "http://bestanimations.com/Holidays/Christmas/santa/funny-santa-claus-gif-2.gif";
//   console.log("another func!");
// }

// loadResults.addEventListener("load", loading);

submit.addEventListener("click", sexyFunc);
