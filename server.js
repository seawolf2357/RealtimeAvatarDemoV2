const express = require('express');
const path = require('path');
const fs = require('fs')
const http = require('http');
const app = express();

const port = 3000
app.use(express.static(path.join(__dirname, '.')));

const server = http.createServer(app);
server.listen(port, function () {
 console.log('App is listening on port 3000!');
});
