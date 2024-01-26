const express = require('express');
const port = process.env.PUBLIC_PORT ?? 8000;

const app = express();

app.use(express.static('build'));

if (module === require.main) {
    app.listen(port, () => {
        console.log(`🚀 server running on PORT: ${port}`);
    });
}

module.exports = app;
