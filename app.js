
const express = require("express");
const router = require("./router/router");
const server = express();
//config express
server.use(express.json());
// config router
server.use(router);
// starting aplication
server.listen(3000, () => {
  console.log(`Server started at 3000`);
});
