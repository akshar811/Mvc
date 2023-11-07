const { Router } = require("express");
// const { isAuth } = require("../middlewares/user.middleware");
const { add, productdisplay } = require("../controller/products.controller");
const { get } = require("mongoose");
const prod_router = Router();

prod_router.post("/add",add);
prod_router.get("/add",productdisplay);
prod_router.get("/get",get);

module.exports = prod_router;
