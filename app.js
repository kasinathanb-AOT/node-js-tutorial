
const express = require("express");
const router = require("./router/router");
const server = express();
server.use(express.json());

server.use(router);

server.listen(3000, () => {
  console.log(`Server started at 3000`);
});

server.get("/", (req, res) => {
  res.send("SERVER STARTED....");
});
