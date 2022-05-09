require('dotenv').config();
require('dotenv-defaults').config();

const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');
const routePath = path.join(__dirname, 'routes');
const fileNames = fs.readdirSync(routePath);
const PORT = process.env.PORT || 3000;

fileNames.forEach(fileName => {
    app.use(`/${fileName.slice(0, -3)}`, require(`./routes/${fileName}`));
});

app.listen(
    PORT,
    () => console.log(`Server is running on http://localhost:${PORT}`)
);

// Middleware - Might delete this later
app.use(express.json());