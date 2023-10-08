const {Router} = require("express")
const { users, createuser, updateuser, deleteuser } = require("../controller/user.controller")

const Route = Router()

Route.get("/",users)

Route.post("/",createuser)

Route.patch("/:id",updateuser)

Route.delete("/:id",deleteuser)

module.exports = Route 
