const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { errorMiddlewares } = require("../middlewares/error");
const { notFound } = require("../middlewares/notFound");
const authenticate = require("../middlewares/authenticate");

const authRoute = require("../router/auth");
const managerRoute = require("../router/manager");
const itemRoute = require("../router/item");

module.exports = function resApiServer(app) {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(express.static("public"));

  app.use("/auth", authRoute);
  app.use("/manager", authenticate, managerRoute);
  app.use("/cars", itemRoute);

  app.use(notFound);
  app.use(errorMiddlewares);
};
