const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.static('build'));

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
