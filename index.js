let player;
let isAPILoaded = false;
function onYouTubeIframeAPIReady() {
  isAPILoaded = true;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

const idForm = document.getElementById("idForm");
const idInput = document.getElementById("id-input");

console.log(document.getElementById("idForm"));

idForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!player) {
    player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: idInput.value,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  } else player.loadVideoById(idInput.value);
});
