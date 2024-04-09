const express = require("express");

const prisma = require("../config/prisma");

const itemRoute = express.Router();

itemRoute.get("/", async (req, res) => {
  const car = await prisma.car.findMany();
  res.status(200).json({ car });
});

module.exports = itemRoute;
