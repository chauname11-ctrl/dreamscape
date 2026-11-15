function enterUniverse() {

    const home = document.querySelector(".container");
    const second = document.getElementById("secondPage");

    home.style.display = "none";

    second.style.display = "flex";

    window.scrollTo(0, 0);

    setTimeout(() => {
        second.classList.add("active");
    }, 50);
}

function goBack() {

    const home = document.querySelector(".container");
    const second = document.getElementById("secondPage");

    second.classList.remove("active");

    setTimeout(() => {
        second.style.display = "none";
        home.style.display = "flex";
        window.scrollTo(0, 0);
    }, 1000);
}

const song = document.getElementById("song");
const btn = document.getElementById("playBtn");

function playSong() {
    if (song.paused) {
        song.play();
        btn.innerHTML = "⏸";
    } else {
        song.pause();
        btn.innerHTML = "▶";
    }
}

song.onended = function() {
    btn.innerHTML = "▶";
};
