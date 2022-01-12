class WebSpeech {
  constructor(dictionary) {
    this.dictionary = dictionary;
    this.resutl = "";

    this.recognitionList;
    this.recognition;
    this.grammar;

    this.__initGrammar__();
    this.__initRecognizer__();
  }

  // Conficts

  __initGrammar__() {
    const dictionary = this.dictionary;
    this.grammar =
      "#JSGF V1.0; grammar dictionary; public <dictionary> = " +
      dictionary.join(" | ") +
      " ;";
  }

  __initRecognizer__() {
    const SpeechRecognition =
      globalThis.SpeechRecognition || globalThis.webkitSpeechRecognition;
    const SpeechGrammarList =
      globalThis.SpeechGrammarList || globalThis.webkitSpeechGrammarList;

    this.recognitionList = new SpeechGrammarList();
    this.recognitionList.addFromString(this.grammar, 1);

    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
    this.recognition.continuous = false;
    this.recognition.lang = "es-CO";
  }

  // Getter

  get getResult() {
    return this.results ? this.results : "";
  }

  // Handlers

  startHandler() {
    this.recognition.start();
  }

  resultHandler() {
    this.recognition.onresult = (event) => {
      this.results = event.results[0][0].transcript + " ";
    };
  }

  endHandler() {
    this.recognition.onspeechend = () => {
      this.recognition.stop();
    };
  }
  errorhHandler() {
    this.recognition.onnomatch = (event) => {
      console.log(event);
    };

    this.recognition.onerror = (event) => {
      console.log(event);
    };
  }
}

export default WebSpeech
