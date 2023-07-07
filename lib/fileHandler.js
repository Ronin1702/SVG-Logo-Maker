const fs = require('fs');
const path = require('path');

//write the file to examples folder
const writeToFile = (filename, data) => {
  const outputPath = path.join('examples', filename);
  fs.writeFileSync(outputPath, data);
};

module.exports = { writeToFile };