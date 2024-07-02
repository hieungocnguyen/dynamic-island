// Create the animation using GSAP
const box = document.querySelector(".box");

box.addEventListener("click", () => {
  gsap.to(".box", { 
    duration: 0.6,
    width:200,
    ease: "power2.inOut"
  });
});
