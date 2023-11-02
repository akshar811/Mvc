const { Router } = require("express");
const { users, createuser,updateuser, deleteuser, Ui, signup, login, charts, logins, signups, signupcreate, profilepage, logout, reset,  verify, otpsend } = require("../controller/user.controller");

const { finduser, isAuth } = require("../middlewares/user.middleware");
const passport = require("passport");

const Route = Router();

Route.get("/", users);

Route.post("/", createuser);

Route.patch("/:id", updateuser);

Route.delete("/:id", deleteuser);

Route.get("/ui", finduser, Ui);

Route.get("/chart", finduser, charts);

Route.post("/signup", signup);

Route.get("/login", logins);

Route.post("/login",passport.authenticate("local"), login);

Route.get("/signup_page", signups)

Route.post("/signup_page" ,signupcreate )

Route.get("/profile",isAuth,profilepage);

Route.get("/logout", logout)

Route.post("/reset",isAuth,reset);

Route.post("/otp",otpsend);

Route.post("/verify",verify)


module.exports = Route;
