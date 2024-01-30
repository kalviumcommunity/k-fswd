const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const loadData = () => {
  try {
    const dbPath = path.resolve(__dirname, 'db.json');
    const dataBuffer = fs.readFileSync(dbPath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Read the initial state from db.json
let doorsData = loadData();

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Check if the request is for the /doors route or /doors/:id
  const urlRegex = /^\/doors\/[a-zA-Z0-9]+$/;

  if (!urlRegex.test(parsedUrl.pathname)) {
    // Handle other routes
    res.writeHead(404, { 'Content-Type': 'text/json' });
    res.end('Not Found');
    return;
  }

  // Handle CRUD operations
  if (req.method === 'GET') {
    // if the request is for /doors/:id
    if (parsedUrl.pathname !== '/doors') {
      const doorId = parsedUrl.pathname.split('/')[2];
      const door = doorsData.find((door) => door.id === doorId);

      if (door) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(door));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Door not found');
      }
      return;
    }

    // Read operation
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(doorsData));
  } else if (req.method === 'POST') {
    // Create operation
    let newDoor = '';

    req.on('data', (chunk) => {
      newDoor += chunk;
    });

    req.on('end', () => {
      const newDoorObj = JSON.parse(newDoor);
      doorsData.push(newDoorObj);
      fs.writeFileSync('db.json', JSON.stringify(doorsData));
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newDoorObj));
    });
  } else if (req.method === 'PUT') {
    // Update operation
    let updatedDoor = '';

    req.on('data', (chunk) => {
      updatedDoor += chunk;
    });

    req.on('end', () => {
      const updatedDoorObj = JSON.parse(updatedDoor);
      const index = doorsData.findIndex(
        (door) => door.id === updatedDoorObj.id
      );

      if (index !== -1) {
        doorsData[index] = updatedDoorObj;
        fs.writeFileSync('db.json', JSON.stringify(doorsData));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(updatedDoorObj));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Door not found');
      }
    });
  } else if (req.method === 'DELETE') {
    // Delete operation
    const doorId = parsedUrl.query.id;
    const index = doorsData.findIndex((door) => door.id === doorId);

    if (index !== -1) {
      const deletedDoor = doorsData.splice(index, 1)[0];
      fs.writeFileSync('db.json', JSON.stringify(doorsData));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(deletedDoor));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Door not found');
    }
  }
});

// Start the server on port 1338
const PORT = 1338;
server.listen(PORT, () => {
  console.log(`🚀 server is running on ${PORT}`);
});
