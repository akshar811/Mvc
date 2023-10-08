const express = require("express");
const connect = require("./config/db");
const Route = require("./routs/user.routs");

const app = express();
app.use(express.json());

app.use(Route);

app.listen(8090, () => {
  connect();
  console.log("listening on port 8090");
});
