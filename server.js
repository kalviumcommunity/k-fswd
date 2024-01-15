const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT;

// define the /env route with the response in JSON

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
