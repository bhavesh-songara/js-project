let playBtn = document.querySelector("#play");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let pauseBtn = document.querySelector("#pause")
let audio = document.querySelector("#audio");
let progress = document.querySelector(".progress");
let progressContainer = document.querySelector(".progress-container");
let musicName = document.querySelector(".music-name");
let musicStatus = document.querySelector(".music-status");
let img = document.querySelector("#logo");

let musics = ["song1", "song2", "song3", "song4", "song5", "song6"];

let musicIndex = 0;

function loadSong(music) {
    musicName.textContent = music;
    audio.src = `music/${music}.mp3`;
}

loadSong(musics[musicIndex]);

function playSong() {
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    musicStatus.classList.remove("hidden");
    img.style.animationPlayState = "running"
    audio.play();
}

function pauseSong() {
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    musicStatus.classList.add("hidden");
    img.style.animationPlayState = "paused"
    audio.pause();
}

function nextSong() {
    musicIndex++

    if(musicIndex > musics.length - 1) {
        return false;
    }else {
        loadSong(musics[musicIndex]);
        playSong();
    }
}

function prevSong() {
    musicIndex--
    if(musicIndex < 0) {
        return false
    }else {
        loadSong(musics[musicIndex]);
        playSong();
    }
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }


playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);