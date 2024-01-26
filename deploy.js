// read from the 'dev' folder
// write to the 'build' folder
const fs = require('fs');
const path = require('path');

// Function to write index.html to build folder
function writeToBuild() {
  // your code here
}

if (module === require.main) {
  writeToBuild();
}

module.exports = {
  writeToBuild,
};
