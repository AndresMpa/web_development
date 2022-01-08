import detectBrowser from "./browserHandler.js";

const browser = detectBrowser();

const recorderButton = document.querySelector("#recorder");
const test = document.querySelector("#test")

recorderButton.onmousedown = () => {
  browser.record();
};

recorderButton.onmouseup = () => {
  test.value = browser.transcription
};
