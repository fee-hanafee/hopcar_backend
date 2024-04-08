const express = require("express");
require("dotenv").config({ path: "./.env" });
const http = require("http");

const resApiServer = require("./server");

const app = express();
const server = http.createServer(app);
resApiServer(app);

const port = process.env.PORT;
server.listen(port, () => console.log("server on port : ", port));
