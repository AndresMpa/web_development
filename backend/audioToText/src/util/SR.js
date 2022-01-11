const SpeechRecognition =
  globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
const SpeechGrammarList =
  globalThis.SpeechGrammarList || globalThis.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  globalThis.SpeechRecognitionEvent || globalThis.webkitSpeechRecognitionEvent;

const dictionary = ["esto", "es", "un", "test"];
const grammar =
  "#JSGF V1.0; grammar dictionary; public <dictionary> = " +
  dictionary.join(" | ") +
  " ;";

let recognitionList = new SpeechGrammarList();
recognitionList.addFromString(grammar, 1);

let recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.continuous = false;
recognition.lang = "es-CO";

let resutl;
const recorder = document.querySelector("#recorder");
recorder.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  document.querySelector("#record").value = event.results[0][0].transcript;
  resutl = event.results[0][0].transcript;
};

recognition.onspeechend = () => {
  const test = document.querySelector("#test");
  test.value += resutl;
  recognition.stop();
};

recognition.onnomatch = (event) => {
  console.log(`
  ${event.results[0][0].transcript}
  ${event.results[0][0].confidence}
  `);
};

recognition.onerror = (event) => {
  console.log(event);
};
