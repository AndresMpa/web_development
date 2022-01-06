import detectBrowser from "./browserHandler.js";

const browser = detectBrowser();

const recorderButton = document.querySelector("#recorder");

recorderButton.onmousedown = () => {
  console.log(`${browser.record()} Recording`);
};

recorderButton.onmouseup = () => {
  console.log(`Writing ${browser.transcription}`);
};
