import WebSpeech from "./util/WebSpeech.js";

class AudioToText {
  constructor(config) {
    this.browser = config.browser;
    this.keywords = config.keywords || [];
    this.recordMethod = config.recordMethod;
    this.recordPlugin = config.recordPlugin;
    this.writerPlugin = config.writerPlugin;

    this.recordedFile = Object;
    this.currentText = "";

    this.__init__();
  }

  __init__() {
    if (this.recordMethod === "WebAPI") {
      this.recordedFile = new WebSpeech([this.keywords]);
    }
  }

  record() {
    this.recordPlugin.prototype.heard(this);
  }

  get transcription() {
    this.writerPlugin.prototype.write(this);
    return this.currentText + "";
  }

  WebRecord() {
    console.log(`Recording on ${this.browser}, using ${this.recordMethod}`);
    this.recordedFile.startHandler();
    this.recordedFile.resultHandler();
  }

  WebWritter() {
    console.log(`Writing from ${this.recordMethod} out put`);
    this.recordedFile.endHandler();
    this.recordedFile.errorhHandler();
    this.currentText = this.recordedFile.getResult;
  }

  TTSRecord() {
    console.log(`Recording on ${this.browser}, using ${this.recordMethod}`);
    let file = "File";
    this.recordedFile = file;
  }

  TTSWritter() {
    console.log(`Writing from ${this.recordMethod} out put`);
    this.currentText = "No yet";
  }
}

export default AudioToText;
