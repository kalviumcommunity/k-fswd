const express = require('express');
const app = express();

const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.json());

// 1. define a POST endpoint
// 2. use the below json objects as request body to test the route from bruno

// admin JSON
// {
//   "username": "ram",
//   "email": "ram@example.com",
//   "role": "admin",
//   "status": "active"
// }

// user JSON
// {
//   "username": "raj",
//   "email": "raj@example.com",
//   "role": "user",
//   "is_banned": false
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
