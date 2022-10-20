const express = require('express');
const app = express();
const http = require('http');

require("./configDB");

const hostname = 'localhost';
const port = 3035;
const routerApi = require("./routes");

const cors = require('cors');
app.use(cors());

app.use(express.json());

var server = http.createServer(app);
routerApi(app);

server.listen(port, () => {
    console.log(`[Server running on ${hostname}:${port}]`);
});