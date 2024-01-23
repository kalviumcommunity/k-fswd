const express = require('express');
const { startDatabase, stopDatabase, getConnectionStatus } = require('./db');
const app = express();
const port = process.env.PUBLIC_PORT ?? 8000;

let server;

app.get('/', (_, res) => {
  res.json({
    message: 'o_O',
    database: getConnectionStatus(),
  });
});

const startServer = async () => {
  await startDatabase();

  server = app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
};

const stopServer = async () => {
  if (server) {
    await server.close();
  }
  
  await stopDatabase();
};

process.on('SIGINT', async () => {
  await stopServer();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await stopServer();
  process.exit(0);
});

if (require.main === module) {
  startServer();
}

module.exports = { app, startServer, stopServer };
