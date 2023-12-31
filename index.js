const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const Route = require("./routs/user.routs");
const nodemialer = require("nodemailer");

const session = require("express-session");
const passport = require("passport");
const LocalAuth = require("./helper/local");

const pro_router = require("./routs/product.routs");
const cors = require("cors");
const cate = require("./routs/category.routs");
const subcat = require("./routs/subcategory.routs");
const prod_router = require("./routs/products.route");

const app = express();

app.use(session({secret : "private-key"}));
app.use(passport.initialize());
app.use(passport.session());
LocalAuth(passport);

app.use(express.json());
app.use(cookies());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", Route);
app.use("/product",pro_router)
app.use("/category",cate)
app.use("/subcategory",subcat)
app.use("/products",prod_router)

app.listen(8070, () => {
  connect();
  console.log("listening on port 8070");
});
