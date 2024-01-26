// read files from the 'dev' folder
// concat 'one.html' and 'two.html' into 'index.html'
// write 'index.html' the 'build' folder
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
