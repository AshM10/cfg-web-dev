console.log("I am a text");

let theButton = document.getElementById("the-button");

theButton.addEventListener("click", () => {
  theButton.style.color = "red";
  theButton.innerText = "boo!";
});

let myName = "Ash";
console.log(myName);
