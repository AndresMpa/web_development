import { TSSRecordToFile } from "./plugins/TSSRecordToFile.js";
import { TSSFileToText } from "./plugins/TSSFileToText.js";
import { RecordToFile } from "./plugins/RecordToFile.js";
import { FileToText } from "./plugins/FileToText.js";

import AudioToText from "./AudioToText.js";

const detectBrowser = () => {
  // TextToSpeech
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return new AudioToText({
      browser: "Opera",
      plugin: [TSSRecordToFile(), TSSFileToText()],
    });
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return new AudioToText({
      browser: "Firefox",
      plugin: [TSSRecordToFile(), TSSFileToText()],
    });

    // SpeechRecognition
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return new AudioToText({
      browser: "Chrome",
      plugin: [RecordToFile(), FileToText()],
    });
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return new AudioToText({
      browser: "Safari",
      plugin: [RecordToFile(), FileToText()],
    });
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    return new AudioToText({
      browser: "IE",
      plugin: [RecordToFile(), FileToText()],
    });
  } else {
    return "Not Supported";
  }
};

export default detectBrowser;
