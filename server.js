const express = require('express');
const generateData = require('./data-generator');
const app = express();
const port = process.env.PUBLIC_PORT ?? 8000;

// 1. Get the property 'count' from the query string, be default it should return 10
// 2. Convert the value to a number
// 2.1 If the value is not a number, return a 400 status code with a message
// 2.2 If the value is not between 1 and 50, return a 400 status code with a message
// 3. Generate that many random users between 1 and 50. Use the function 'generateData'
// 4. Return the numbers as JSON
app.get('/generate-data', (req, res) => {
  // Your code here
  res.json([]);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
