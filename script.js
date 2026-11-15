
document.addEventListener("DOMContentLoaded", function() {

function enterUniverse() {
    document.querySelector(".container").style.display = "none";

    const page = document.getElementById("secondPage");

    page.style.display = "flex";

    setTimeout(() => {
        page.classList.add("active");
    }, 50);
}

function goBack() {
    const page = document.getElementById("secondPage");

    page.classList.remove("active");

    setTimeout(() => {
        page.style.display = "none";
        document.querySelector(".container").style.display = "flex";
    }, 1000);
}

async function playSong() {
    const song = document.getElementById("song");
    const btn = document.getElementById("playBtn");

    if (song.paused) {
        try {
            await song.play();
            btn.textContent = "⏸";
        } catch (error) {
            console.error("Musik gagal diputar:", error);
            btn.textContent = "▶";
        }
    } else {
        song.pause();
        btn.textContent = "▶";
    }
}

const song = document.getElementById("song");
const btn = document.getElementById("playBtn");

btn.addEventListener("click", playSong);

song.addEventListener("ended", function() {
    btn.textContent = "▶";
});

song.addEventListener("pause", function() {
    btn.textContent = "▶";
});

song.addEventListener("play", function() {
    btn.textContent = "⏸";
});

window.enterUniverse = enterUniverse;
window.goBack = goBack;

});
