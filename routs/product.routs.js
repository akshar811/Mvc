const { Router } = require("express")
const { createproduct, display, findproduct, deleteproduct, updateproduct } = require("../controller/product.controller")

const pro_router = Router()

pro_router.get("/", display)

pro_router.post('/create',createproduct)

pro_router.get("/products", findproduct)

pro_router.delete("/delete/:id", deleteproduct)

pro_router.patch("/update/:id", updateproduct)

module.exports = pro_router