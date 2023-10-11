const express = require("express");
const connect = require("./config/db");
const Route = require("./routs/user.routs");
const { signups } = require("./controller/user.controller");


const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');
app.use(express.static(__dirname + "/public"))

app.use("/user",Route);
app.use("/signup",signups)

app.listen(8090, () => {
  connect();
  console.log("listening on port 8090");
});
