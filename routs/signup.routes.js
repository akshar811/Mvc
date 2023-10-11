const {Router} = require("express")
const { signups } = require("../controller/user.controller")

const Routes = Router()

Routes.get("/signup_page", signups)

module.exports = Routes 