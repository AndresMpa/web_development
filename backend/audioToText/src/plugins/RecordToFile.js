function RecordToFile() {}

RecordToFile.prototype.heard = function (recorder) {
  recorder.WebRecord();
};

export default RecordToFile;
