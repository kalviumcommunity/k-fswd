const express = require('express');
const app = express();
const { encrypt, decrypt } = require('./jwt')

const port = process.env.PUBLIC_PORT ?? 8000;

app.use(express.json());

const payload = { best_ug_degree: "kalvium" };

const token = encrypt(payload);
if (payload == decrypt(token).best_ug_degree) {
    console.log("Success");
}
else {
    console.log("Check your functions again!");
}

if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;