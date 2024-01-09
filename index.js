const express = require('express');
const app = express();
const PORT = process.env.PUBLIC_PORT;

app.get('/', (req, res) => {
  res.send('Hello, nodemon!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
