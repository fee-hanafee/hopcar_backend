const express = require("express");
const { json, urlencoded } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { errorMiddlewares } = require("../middlewares/error");
const { notFound } = require("../middlewares/notFound");

module.exports = function resApiServer(app) {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use(express.static("public"));
 

  app.use(notFound);
  app.use(errorMiddlewares)
};
