const express = require('express');
const app = express();

const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.json());

// 1. define a POST endpoint
// 2. use the below json object as request body to test the route from bruno

// { "best_ug_degree": "kalvium" }

app.post('/api/data', (req, res) => {
  // console log the request body
  // or
  // return the request body as response

  // your code here
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
