const express = require('express');
const genrateData = require('./data-generator');
const app = express();
const port = process.env.PUBLIC_PORT ?? 8000;

const users = genrateData();
// console.log(users);

// define the /users route with the response in JSON
// if the process.env.IS_ADMIN is true, then return the personal property as well
app.get('/users', (req, res) => {
  const { IS_ADMIN } = process.env;

  if (IS_ADMIN === 'true') {
    return res.json(users);
  }

  return res.json(users.map(({ personal, ...user }) => user));
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
