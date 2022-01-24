import { proxyGenerator } from "./util/proxyCommands.js";
import detectBrowser from "./browserHandler.js";

const browser = detectBrowser();
const proxy = proxyGenerator();

const recorderButton = document.querySelector("#recorder");
const test = document.querySelector("#test");

recorderButton.onmousedown = () => {
  browser.record();
};

recorderButton.onmouseup = () => {
  setTimeout(() => {
    let transcription = browser.transcription;
    test.value += transcription;
    proxy.value = transcription;
  }, 800);
};
