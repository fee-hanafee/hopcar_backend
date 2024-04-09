const express = require("express");

const validate = require("../middlewares/validator/post");
const upload = require("../middlewares/upload");
const c = require("../controller");

const managerRoute = express.Router();

managerRoute.post(
  "/create",
  upload.single("image"),
  validate.validatePost,
  c.manager.createCar
);

managerRoute.patch("/edit", upload.single("image"), c.manager.editCar);

managerRoute.delete('/:carId',c.manager.deleteCar)

module.exports = managerRoute;
