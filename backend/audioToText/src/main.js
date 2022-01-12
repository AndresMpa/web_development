import detectBrowser from "./browserHandler.js";
import { commands, actions } from "./util/commands.js";

const browser = detectBrowser();

const recorderButton = document.querySelector("#recorder");
const test = document.querySelector("#test");

recorderButton.onmousedown = () => {
  browser.record();
};

recorderButton.onmouseup = () => {
  setTimeout(() => {
    let transcription = browser.transcription;
    test.value += transcription;
    commands(transcription, actions(transcription));
  }, 800);
};
