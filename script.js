const responses = [
  "Yes", "No", "Maybe", "Come back later",
  "Haha! You're funny!", "Go be a painter",
  "Painterman!!", "Not a chance", "Very unlikely",
  "Very likely", "Nope", "Go Away!"
];

function getMagic8BallResponse() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

function displayResponse() {
  const question = document.getElementById("questionInput").value.trim();

  // Check if a question was entered
  if (question === "") {
    document.getElementById("response").textContent = "Please ask a question first!";
    return;
  }

  const eightBallImage = document.getElementById("eightBallImage");
  eightBallImage.classList.add("shake");

  setTimeout(() => {
    eightBallImage.classList.remove("shake");
    const response = getMagic8BallResponse();
    document.getElementById("response").textContent = `✨ Magic 8 Ball says: ${response} ✨`;
  }, 500);
}

document.getElementById("eightBallImage").addEventListener("click", displayResponse);

document.getElementById("questionInput").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    displayResponse();
  }
});
