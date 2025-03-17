let stream = null;
const videoEl = document.querySelector("#my-video");

const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    changeButtons(["green", "blue", "blue", "grey", "grey", "grey", "blue"]);
  } catch (error) {
    console.log(error);
  }
};

const showMyFeed = (e) => {
  videoEl.srcObject = stream;
  changeButtons(["green", "green", "blue", "blue", "grey", "grey", "blue"]);
};

const stopMyFeed = (e) => {
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    track.stop();
  });
  changeButtons(["blue", "blue", "blue", "grey", "grey", "grey", "blue"]);
};

document
  .querySelector("#share")
  .addEventListener("click", (e) => getMicAndCamera(e));
document
  .querySelector("#show-video")
  .addEventListener("click", (e) => showMyFeed(e));
document
  .querySelector("#stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));
