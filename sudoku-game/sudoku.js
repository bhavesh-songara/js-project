let gameBoard = document.querySelector(".game-board");
let table = document.createElement("table");
for(let i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    for(let i = 0; i < 9; i++) {
        let td = document.createElement("td");
        td.setAttribute("contenteditable", true)
        tr.append(td);
    }
    table.append(tr)
    gameBoard.append(table);
}
let span = document.querySelector(".span");
span.textContent = "10:00"

function startTimer() {
    let presentTime = span.innerHTML;
    let timeArray = presentTime.split(":");
    let min = timeArray[0];
    let sec = checkSec(timeArray[1] - 1);
    if(sec == 59) {
        min -= 1;
    }
    let newTime = `${min}:${sec}`;
    span.textContent = newTime;
    setTimeout(startTimer, 1000)
}

function checkSec(s) {
    if(s < 10 && s >= 0) {
        s = "0" + s;
    }
    if(s < 0) {
        s = 59;
    }
    return s;
}

startTimer();

let td = document.querySelector("td");

td.addEventListener("keypress", checkNumber);

function checkNumber()  {
    let num = td.innerHTML;
    if(num > '0' && num < '10') {
        return num;
    }else {
        return false;
    }
}