function TSSRecordToFile() {}

TSSRecordToFile.prototype.heard = function (recorder) {
  recorder.TTSRecord();
};

export default TSSRecordToFile;
