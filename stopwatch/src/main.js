let miliSec = 0;
let sec = 0;
let min = 0;

let displayMs = 0;
let displaySec = 0;
let displayMin = 0;

let status = "stop";

let interval = null;


function startWatch() {
    document.querySelector("#startBtn").classList.add("hidden");
    document.querySelector("#pauseBtn").classList.remove("hidden");
    document.querySelector("#lapBtn").classList.remove("hidden");
    document.querySelector("#lapBtn").classList.add("active");
    if(!document.querySelector("#resetBtn").classList.contains("hidden")) {
        document.querySelector("#resetBtn").classList.add("hidden");
    }
    miliSec++
    
   if(miliSec / 100 == 1) {
       miliSec = 0; 
       sec++;
       if(sec / 60 == 1) {
           sec = 0;
           min++;
       }
   }
   if(miliSec < 10) {
    displayMs = "0" + miliSec;
}else {
    displayMs = miliSec;
}
   if(sec < 10) {
       displaySec = "0" + sec;
   }else {
       displaySec = sec;
   }
   if(min < 10) {
       displayMin = "0" + min
   }else {
       displayMin = min;
   }
   document.querySelector(".watch").textContent = displayMin + ":" + displaySec + ":" + displayMs;
}

function stopWatch() {
    document.querySelector("#pauseBtn").classList.add("hidden");
    document.querySelector("#lapBtn").classList.add("hidden");
    document.querySelector("#startBtn").classList.remove("hidden");
    document.querySelector("#resetBtn").classList.remove("hidden");
}

function resetWatch() {
    document.querySelector("#pauseBtn").classList.add("hidden");
    document.querySelector("#resetBtn").classList.add("hidden");
    document.querySelector("#lapBtn").classList.remove("active");
    document.querySelector("#lapBtn").classList.remove("hidden");
    miliSec = 0;
    sec = 0;
    min = 0;
    document.querySelector(".watch").textContent = "00:00:00";
    while(document.querySelector(".lap-data-container").firstChild) {
        document.querySelector(".lap-data-container").removeChild(document.querySelector(".lap-data-container").firstChild);
    }
    // document.querySelector()
}

function lapWatch() {
    if(document.querySelector("#lapBtn").classList.contains("active")) {
        let lapDiv = document.createElement("div");
        lapDiv.classList.add("lap");
        let srNo = document.createElement("p");
        if(document.querySelector(".lap-data-container").children.length > 0) {
          let text =  document.querySelector(".lap-data-container").firstElementChild.firstElementChild.textContent;
          srNo.textContent = Number(text) + 1;
        }else {
            srNo.textContent = "1"
        }
        let lapTime = document.createElement("p");
        lapTime.textContent = document.querySelector(".watch").textContent;
        lapTime.classList.add("gap");
        
        lapDiv.append(srNo);
        lapDiv.append(lapTime);

        document.querySelector(".lap-data-container").prepend(lapDiv);
        document.querySelector(".lap-data-container").classList.remove("hidden");
    }
}

function checkStatus() {
    if(status == "stop") {
        interval = window.setInterval(startWatch, 10);
        status = "start"
    }else {
        window.clearInterval(interval)
        status = "stop";
        stopWatch();
    }

}


document.querySelector("#startBtn").addEventListener("click", checkStatus);

document.querySelector("#pauseBtn").addEventListener("click", checkStatus);

document.querySelector("#resetBtn").addEventListener("click", resetWatch);

document.querySelector("#lapBtn").addEventListener("click", lapWatch);
