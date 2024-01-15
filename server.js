const express = require('express');
const app = express();
const port_1 = process.env.PUBLIC_PORT;
const port_2 = process.env.SECONDARY_PUBLIC_PORT

// define express apps that run on port_1 and port_2
let app1, app2

if (require.main === module) {
  // add the listen for the express app
}

module.exports = {
  app1,
  app2
};
