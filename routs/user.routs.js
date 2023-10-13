const {Router} = require("express")
const { users, createuser, updateuser, deleteuser, Ui, signup, login, charts, logins } = require("../controller/user.controller")

const Route  = Router()

Route.get("/",users)

Route.post("/",createuser)

Route.patch("/:id",updateuser)

Route.delete("/:id",deleteuser)  

Route.get("/ui", Ui)

Route.get("/chart", charts)

Route.post("/signup", signup)

Route.get("/login",logins)

Route.post("/login", login)

module.exports = Route

