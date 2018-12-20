const submit = document.getElementById("submitButton");
const sexySanta = document.getElementById("sexySanta");

const myFunc = () => {
  console.log("func!");
  sexySanta.src = "https://media.giphy.com/media/3miUqUEZvAbEwXtfRk/giphy.gif";
}

submit.addEventListener("click", myFunc);
