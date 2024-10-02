import silentRing from "./animations/silent-ring.js";

const mainElement = document.getElementById("main-element");

document.getElementById("silent").addEventListener("click", (event) => {
  silentRing(mainElement);  
});
