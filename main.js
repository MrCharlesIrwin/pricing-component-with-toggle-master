const checkbox = document.querySelector(".pricing__checkboxBody");
const circle = document.querySelector(".pricing__checkboxBody__circle");
const priceInactive = document.querySelectorAll(".priceInactive");
const priceActive = document.querySelectorAll(".priceActive");

checkbox.addEventListener("click", (e) => {
  circle.classList.toggle("translate");
  priceInactive.forEach((e) => e.classList.toggle("inactive"));
  priceActive.forEach((e) => e.classList.toggle("active"));
});
