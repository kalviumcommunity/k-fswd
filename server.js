const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT;

// define the ping route

app.listen(port, () => {
  console.log(`🚀 server running on PORT: ${port}`);
});

module.exports = app;
