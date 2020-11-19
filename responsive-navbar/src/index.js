let isVisible = false;

let Btn = document.querySelector("#Btn");

Btn.addEventListener("click", handler);

function handler() {
  isVisible = !isVisible;
  if (isVisible) {
    document.querySelector(".content").classList.remove("hidden");
    Btn.src = "src/cancel.svg";
  } else {
    Btn.src = "src/menu.svg";
    document.querySelector(".content").classList.add("hidden");
  }
}
