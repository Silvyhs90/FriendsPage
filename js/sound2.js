const loadSound = function (source) {
    const sound = document.createElement("audio");
    sound.src = source;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none"; 
    document.body.appendChild(sound);
    return sound;
};
const $buttonPlay = document.querySelector("#btnPlay"),
    $buttonPause = document.querySelector("#btnPause"),
    $buttonReset = document.querySelector("#btnReset");


const sound = loadSound("sounds/cat.mp3");
$buttonPlay.onclick = () => {
    sound.play();
};
$buttonPause.onclick = () => {
    sound.pause();
};
$buttonReset.onclick = () => {
    sound.currentTime = 0;
};