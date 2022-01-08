class AudioToText {
  constructor(config) {
    this.browser = config.browser;
    this.recordMethod = config.recordMethod;
    this.recordPlugin = config.recordPlugin;
    this.writerPlugin = config.writerPlugin;

    this.recordedFile = Object;
    this.currentText = "";
  }

  record() {
    this.recordPlugin.prototype.heard(this);
  }

  get transcription() {
    this.writerPlugin.prototype.write(this);
    return this.currentText;
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

  WebRecord() {
    console.log(`Recording on ${this.browser}, using ${this.recordMethod}`);
    let file = "File"
    this.recordedFile = file;
  }

  WebWritter() {
    console.log(`Writing from ${this.recordMethod} out put`);
    this.currentText = "No yet";
  }
}

export default AudioToText;
