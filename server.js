const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 8000;
const genrateData = require('./data-generator');

const data = genrateData()

// define a GET endpoint which returns the data variable defined above as response

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
