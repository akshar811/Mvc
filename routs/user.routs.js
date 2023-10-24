const { Router } = require("express");
const { users, createuser,updateuser, deleteuser, Ui, signup, login, charts, logins, signups, signupcreate } = require("../controller/user.controller");

const { finduser } = require("../middlewares/user.middleware");
const passport = require("passport");

const Route = Router();

Route.get("/", finduser, users);

Route.post("/", createuser);

Route.patch("/:id", updateuser);

Route.delete("/:id", deleteuser);

Route.get("/ui", finduser, Ui);

Route.get("/chart", finduser, charts);

Route.post("/signup", signup);

Route.get("/login", logins);

Route.post("/login",passport.authenticate("local"), login);

Route.get("/signup_page", signups)

Route.post("/signup_page", finduser ,signupcreate )

Route.get("/user",(req , res) =>{
    console.log(req.user);
    res.send("find user...");
})

module.exports = Route;
