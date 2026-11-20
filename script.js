const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const createBtn = document.getElementById("createBtn");

const questionScreen = document.getElementById("questionScreen");
const nameScreen = document.getElementById("nameScreen");
const finalScreen = document.getElementById("finalScreen");

const noMessage = document.getElementById("noMessage");

// YES button
yesBtn.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  nameScreen.classList.remove("hidden");
});

// NO button
noBtn.addEventListener("click", () => {
  noMessage.textContent =
    "🥺 Please manjao na mere jaan ❤️";
});

// Create love story
createBtn.addEventListener("click", () => {
  const boy = document.getElementById("boyName").value.trim();
  const girl = document.getElementById("girlName").value.trim();

  const error = document.getElementById("errorMessage");

  if (!boy || !girl) {
    error.textContent = "Please enter both names! ❤️";
    return;
  }

  document.getElementById("coupleNames").textContent =
    boy + " ❤️ " + girl;

  nameScreen.classList.add("hidden");
  finalScreen.classList.remove("hidden");

  error.textContent = "";
});

// Background music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "⏸ Pause Music";
    } catch (error) {
      musicBtn.textContent = "🎵 Try Again";
    }
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});

// Floating hearts animation
const hearts = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.textContent = ["❤️", "💕", "💗", "💖"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (18 + Math.random() * 25) + "px";
  heart.style.animationDuration = (4 + Math.random() * 5) + "s";

  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 450);