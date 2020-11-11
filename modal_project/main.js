let modal = document.querySelector("#simpleModal");
let modalBtn = document.querySelector("#modalBtn");

modalBtn.addEventListener("click", showCover);

let closeBtn = document.querySelector("#closeBtn");

closeBtn.addEventListener("click", hideCover);

document.body.addEventListener("keydown", checKey);

document.body.addEventListener("click", outsideClick);

function showCover() {
    modal.style.display = "block";
}


function hideCover() {
    modal.style.display = "none";
}

function checKey(e) {
    console.log(e.key)
    if(e.key == "Escape") {
        hideCover();
    }
}

function outsideClick(e) {
    if(e.target == modal) {
        hideCover();
    }
}