const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const Route = require("./routs/user.routs");

const app = express();
app.use(express.json());
app.use(cookies());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", Route);

app.listen(8070, () => {
  connect();
  console.log("listening on port 8070");
});
