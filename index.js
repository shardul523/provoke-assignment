let player;
let isAPILoaded = false;
function onYouTubeIframeAPIReady() {
  isAPILoaded = true;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
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
  if (isAPILoaded) {
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
  }
});
