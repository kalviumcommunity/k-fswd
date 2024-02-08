const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// repond function to write the response as a JSON
const respond = (res, status, contentType, data) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.writeHead(status, { 'Content-Type': contentType });
  if (data) return res.end(JSON.stringify(data));
  res.end();
};

const loadData = (key) => {
  try {
    const dbPath = path.resolve(__dirname, 'db.json');
    const dataBuffer = fs.readFileSync(dbPath);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return key ? data[key] : data;
  } catch (e) {
    return {};
  }
};

const saveData = (key, data) => {
  try {
    const dbPath = path.resolve(__dirname, 'db.json');
    const existingData = loadData();
    const newData = { ...existingData, [key]: data };
    const dataJSON = JSON.stringify(newData, null, 2);
    fs.writeFileSync(dbPath, dataJSON);
    return data;
  } catch (e) {
    return {};
  }
};

// Read the initial state from db.json
let doorsData = loadData('doors');

// 'get' handler for the /doors route
const getHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // if the request is for /doors/:id
  if (parsedUrl.pathname !== '/doors') {
    const doorId = parsedUrl.pathname.split('/')[2];
    const door = doorsData.find((door) => door.id === doorId);

    if (door) {
      return respond(res, 200, 'application/json', door);
    }

    return respond(res, 404, 'application/json', {
      message: 'Door not found',
    });
  }

  // Read operation
  return respond(res, 200, 'application/json', doorsData);
};

const postHandler = (req, res) => {
  let newDoor = '';

  req.on('data', (chunk) => {
    newDoor += chunk;
  });

  req.on('end', () => {
    let newDoorObj = JSON.parse(newDoor);
    const id = doorsData.length + 1;
    newDoorObj = { id: id.toString(), ...newDoorObj };
    doorsData.push(newDoorObj);
    saveData('doors', doorsData);

    return respond(res, 201, 'application/json', newDoorObj);
  });
};

const putHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let updatedDoor = '';

  req.on('data', (chunk) => {
    updatedDoor += chunk;
  });

  req.on('end', () => {
    const doorId = parsedUrl.pathname.split('/')[2];
    let updatedDoorObj = JSON.parse(updatedDoor);
    const index = doorsData.findIndex((door) => door.id === doorId);

    if (index !== -1) {
      updatedDoorObj = { id: doorId, ...updatedDoorObj };
      doorsData[index] = updatedDoorObj;
      saveData('doors', doorsData);
      return respond(res, 200, 'application/json', updatedDoorObj);
    }

    return respond(res, 404, 'application/json', {
      message: 'Door not found',
    });
  });
};

const deleteHandler = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const doorId = parsedUrl.pathname.split('/')[2];
  const index = doorsData.findIndex((door) => door.id === doorId);

  if (index !== -1) {
    const deletedDoor = doorsData.splice(index, 1)[0];
    saveData('doors', doorsData);

    return respond(res, 200, 'application/json', deletedDoor);
  }

  return respond(res, 404, 'application/json', { message: 'Door not found' });
};

const server = http.createServer((req, res) => {
  // CRUD operations
  // GET /doors
  // GET /doors/:id
  // POST /doors
  // PUT /doors/:id
  // DELETE /doors/:id
  const parsedUrl = url.parse(req.url, true);

  // Check if the request is for the /doors route or /doors/:id
  const urlRegex = /^\/doors\/[a-zA-Z0-9]+$/;

  if (!urlRegex.test(parsedUrl.pathname) && parsedUrl.pathname !== '/doors') {
    // Handle other routes
    return respond(res, 404, 'text/json', { message: 'Not Found' });
  }

  // Handle CRUD operations using switch statement
  switch (req.method) {
    case 'GET':
      return getHandler(req, res);

    case 'POST':
      return postHandler(req, res);

    case 'PUT':
      return putHandler(req, res);

    case 'DELETE':
      return deleteHandler(req, res);

    case 'OPTIONS':
      return respond(res, 200, 'application/json');

    default:
      return respond(res, 404, 'application/json', {
        message: 'Not Found',
      });
  }
});

// Start the server on port 1338
const PORT = 1338;
server.listen(PORT, () => {
  console.log(`🚀 server is running on ${PORT}`);
});
