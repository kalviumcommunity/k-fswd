const express = require('express');
const app = express();

const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.json());

// 1. define a POST endpoint
// 2. use the below json object as request body to test the route from bruno and validate if with joi

// { 
//   "squad": "<your squad>",
//   "name": "<your name>",
//   "mobile": "<your number>",
//   "dob": "<your date of birth>",
//   "github": "<your github>",
// }

app.post('/api/data', (req, res) => {
  // your code here
  
  res.json({}); // replace this with your response
});


if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
