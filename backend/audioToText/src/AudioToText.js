class AudioToText {
  constructor(config) {
    this.browser = config.browser;
    this.recordMethod = config.recordMethod;
    this.plugin = config.plugin || [];

    this.records = [];
  }

  record() {
    console.log(`Recording on ${this.browser}`);
    this.records.append(this.plugin[0]());
  }

  voiceTranscription() {
    let transcription = "No voices...";

    return transcription;
  }

  get transcription() {
    return this.voiceTranscription();
  }
}

export default AudioToText;
