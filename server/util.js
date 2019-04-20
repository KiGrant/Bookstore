const stripHtml = require("string-strip-html");

exports.cleanUpVolumeInfo = volumeInfo => {
  return {
    ...volumeInfo,
    description: volumeInfo.description && stripHtml(volumeInfo.description)
  };
};
