const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const startDatabase = async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri())
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log(err));
}

module.exports = startDatabase;