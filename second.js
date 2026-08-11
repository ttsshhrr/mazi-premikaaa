const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// YES button click
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew it 😍";

  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

// YES button ko randomly move karne ka function
function moveYesButton() {
  if (yesBtn.style.position !== "absolute") {
    yesBtn.style.position = "absolute";
  }

  const yesBtnRect = yesBtn.getBoundingClientRect();

  const padding = 20;

  const maxX = window.innerWidth - yesBtnRect.width - padding;
  const maxY = window.innerHeight - yesBtnRect.height - padding;

  const randomX = Math.max(
    padding,
    Math.floor(Math.random() * maxX)
  );

  const randomY = Math.max(
    padding,
    Math.floor(Math.random() * maxY)
  );

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
}

// Desktop
yesBtn.addEventListener("mouseover", moveYesButton);

// Mobile / Tablet
yesBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveYesButton();
});

// Keyboard focus
yesBtn.addEventListener("focus", (e) => {
  e.preventDefault();
  moveYesButton();
});