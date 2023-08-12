// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Start listening on port 80 and log that it is running
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Path: skills-copilot-codespaces-vscode\comments.js
// Create web server
const express = require('express');
const app1 = express();
const port1 = 3000;

// Create a route to handle requests from GitHub Codespaces
app.get('/codespaces', (req, res) => {
    res.send('Hello Codespaces!');
});

// Create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start listening on port 80 and log that it is running
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Path: skills-copilot-codespaces-vscode\comments.js
// Create web server
const express = require('express');
const app2 = express();
const port2 = 3000;

// Create a route to handle requests from GitHub Codespaces
app.get('/codespaces', (req, res) => {
    res.send('Hello Codespaces!');
});

