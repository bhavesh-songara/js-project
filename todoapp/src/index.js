let addTaskBtn = document.querySelector("#addTaskBtn");
let inputText = document.querySelector("#inputText");
let taskManager = document.querySelector(".task-manager");

addTaskBtn.addEventListener("click", createTask);
inputText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

function setActive(target) {
  document.querySelectorAll(".filter-btn").forEach((elem) => {
    if (elem === target) {
      target.classList.add("active-btn");
    } else {
      elem.classList.remove("active-btn");
    }
  });
}

function createTask(e) {
  if (inputText.value.length === 0) {
    return;
  }
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  let para = document.createElement("p");
  para.classList.add("para");
  para.textContent = `${inputText.value}`;
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  let img1 = document.createElement("img");
  img1.setAttribute("src", "src/yes.svg");
  img1.setAttribute("class", "img1");
  let img2 = document.createElement("img");
  img2.setAttribute("src", "src/delete.svg");
  img2.setAttribute("class", "img2");

  imgContainer.append(img1);
  imgContainer.append(img2);
  taskDiv.append(para);
  taskDiv.append(imgContainer);
  taskManager.append(taskDiv);
  inputText.value = "";
  img2.addEventListener("click", removeElem);
  img1.addEventListener("click", changeElem);
}

function removeElem(e) {
  e.target.parentElement.parentElement.remove();
}

function changeElem(e) {
  if (e.target.src === "https://3fchp.csb.app/src/yes.svg") {
    e.target.parentElement.parentElement.firstChild.classList.add("overline");
    e.target.src = "src/close.svg";
    e.target.parentElement.parentElement.classList.add("finished");
  } else {
    e.target.parentElement.parentElement.firstChild.classList.remove(
      "overline"
    );
    e.target.src = "src/yes.svg";
    e.target.parentElement.parentElement.classList.remove("finished");
  }
}

let allFilterBtn = document.querySelector("#allFilterBtn");
let finishFilterBtn = document.querySelector("#finishFilterBtn");
let unfinishFilterBtn = document.querySelector("#unfinishFilterBtn");

finishFilterBtn.addEventListener("click", (e) => {
  setActive(e.target);
  document.querySelectorAll(".task").forEach((elem) => {
    if (!elem.classList.contains("finished")) {
      elem.style.display = "none";
    } else {
      elem.style.display = "flex";
    }
  });
});

unfinishFilterBtn.addEventListener("click", (e) => {
  setActive(e.target);
  document.querySelectorAll(".task").forEach((elem) => {
    if (elem.classList.contains("finished")) {
      elem.style.display = "none";
    } else {
      elem.style.display = "flex";
    }
  });
});

allFilterBtn.addEventListener("click", (e) => {
  setActive(e.target);
  document.querySelectorAll(".task").forEach((elem) => {
    elem.style.display = "flex";
  });
});
