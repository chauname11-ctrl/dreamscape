
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
            console.log("Gagal memutar musik:", error);
            btn.textContent = "▶";
        }
    } else {
        song.pause();
        btn.textContent = "▶";
    }
}

document.getElementById("song").addEventListener("ended", function() {
    document.getElementById("playBtn").textContent = "▶";
});

