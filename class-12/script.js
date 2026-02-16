const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const value = document.getElementById("value");

let count = 0;

decrease.addEventListener("click", () => {
  count--;
  value.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});

increase.addEventListener("click", () => {
  count++;
  value.textContent = count;
});
