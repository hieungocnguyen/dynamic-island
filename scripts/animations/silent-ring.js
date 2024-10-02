const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");
const svg = document.createElement("img");
const text = document.createElement("div");

const initElement = (mainElement) => {
  svg.src = "./assets/silent.svg";
  svg.style.width = "20px";
  svg.style.height = "20px";
  leftContainer.appendChild(svg);

  leftContainer.style.width = "54px";
  leftContainer.style.height = "100%";
  leftContainer.style.backgroundColor = "#FF3C33";
  leftContainer.style.borderRadius = "36px";
  leftContainer.style.justifyContent = "center";
  leftContainer.style.alignItems = "center";
  leftContainer.style.display = "flex";

  text.style.color = "#FF3C33";
  text.textContent = "Silent";
  text.style.marginRight = "10px";

  rightContainer.appendChild(text);

  mainElement.appendChild(leftContainer);
  mainElement.appendChild(rightContainer);
};

export default function silentRing(mainElement) {
  gsap.to(mainElement, {
    width: 254,
    duration: 0.6,
    ease: "back.out(1.2)",
    onComplete: () => {
      initElement(mainElement);
    },
  });

  gsap.fromTo(
    leftContainer,
    { x: -100 },
    {
      x: 0,
      duration: 0.4,
      delay: 0.5,
      ease: "back.out(1.2)",
    }
  );

  gsap.to(svg, {
    delay: 0.7,
    rotate: 12,
    duration: 0.1,
    repeat: 3,
    yoyo: true,
  });

  gsap.fromTo(
    rightContainer,
    { x: 100 },
    {
      x: 0,
      duration: 0.4,
      delay: 0.5,
      ease: "back.out(1.2)",
    }
  );

  gsap.to(leftContainer, {
    x: -100,
    delay: 2,
    duration: 0.4,
    ease: "back.in(1.6)",
    onComplete: () => {
      mainElement.removeChild(leftContainer);
      // leftContainer.removeChild(svg);
    },
  });

  gsap.to(rightContainer, {
    x: 100,
    delay: 2,
    duration: 0.4,
    ease: "back.in(1.6)",
    onComplete: () => {
      mainElement.removeChild(rightContainer);
      // rightContainer.removeChild(text);
    },
  });

  gsap.to(mainElement, {
    width: 122,
    duration: 0.6,
    delay: 2.6,
    ease: "back.out(1.6)",
  });
}
