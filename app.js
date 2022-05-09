const { env_port } = require('./config/environment');
const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');
const routePath = path.join(__dirname, 'api');
const fileNames = fs.readdirSync(routePath);

fileNames.forEach(fileName => {
    app.use(`/${fileName.slice(0, -3)}`, require(`./api/${fileName}`));
});

app.listen(
    env_port,
    () => console.log(`Server is running on http://localhost:${env_port}`)
);

// Middleware - Might delete this later
app.use(express.json());