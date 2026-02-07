const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const gifs = [
  "resources/bellanadi.jpg",
  "resources/rusure.jpg",
  "resources/3shocked-1.gif",
  "resources/4.crying.gif",
  "resources/5.crying.gif",
  "resources/idc.jpg"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "resources/rusure.jpg";
    text.innerHTML = "But you got a table at La Torre restaurant for us... 🤨🍝 (proud of you babes xx)";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "resources/3shocked-1.gif";
    text.innerHTML = "We can't miss our 5:30pm reservation! 🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "resources/4.crying.gif";
    text.innerHTML = "But... Paddington weekend... Kung Fu Panda... cute walks? 😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "resources/5.crying.gif";
    text.innerHTML = "It's Valentine's Day, Bella... Pretty please? 🥺💕";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "resources/idc.jpg";
  text.innerHTML = "Can't wait for our London adventure! 💕✨<br><small style='font-size: 0.85rem; color: #ff6b9d; line-height: 1.5;'>Feb 14th • 5:30pm<br>La Torre, 39 Topsfield Parade, Crouch End, London N8 8PT</small>";
  yes.innerHTML = '<a href="https://www.instagram.com/luuciaadriana/">Message me! 💌</a>';
  yes.style.height = "50%";
  yes.style.width = "70%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});