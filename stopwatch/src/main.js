document.querySelector("#startBtn").addEventListener("click", startTimer);

 function startTimer() {
     let timeString = document.querySelector(".watch").textContent;
     let timeArray = timeString.split(":");
     let min = timeArray[0];
     let sec = timeArray[1];
     let miliSec = timeArray[2];
    let time = miliSec + 1;
    document.querySelector(".watch").textContent = time;
    setTimeout(startTimer, 1000);
 }
