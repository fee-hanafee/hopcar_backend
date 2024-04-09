const express = require("express");

const authenticate = require('../middlewares/authenticate')
const validate = require('../middlewares/validator/auth')
const c = require("../controller");

const authRoute = express.Router();

authRoute.get("/me", authenticate ,c.auth.getMe);
authRoute.post('/register',validate.register,c.auth.register)
authRoute.post("/login",c.auth.login)


module.exports = authRoute;
