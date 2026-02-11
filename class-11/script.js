const random = document.getElementById("rbox");
const score = document.getElementById("score");

random.addEventListener("click", function () {
  random.style.top = Math.random() * 450 + "px";
  random.style.left = Math.random() * 250 + "px";

  let currscore = +score.textContent.split(": ")[1];
  score.textContent = "Score: " + (currscore + 1);
});
