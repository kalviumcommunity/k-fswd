const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 8000;
const genrateData = require('./data-generator');

const data = genrateData()

app.get('/', (req, res) => {
  res.json(data)
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
