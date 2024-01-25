// read from the 'dev' folder
// write to the 'build' folder


const fs = require('fs');

const files = fs.readdirSync('./dev');


files.forEach(file => {
    fs.copyFileSync(`./dev/${file}`, `./build/${file}`);
})
