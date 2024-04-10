const express = require("express");

const prisma = require("../config/prisma");

const itemRoute = express.Router();

itemRoute.get("/", async (req, res) => {
  const car = await prisma.car.findMany();
  res.status(200).json({ car });
});
itemRoute.get("/user", async (req, res) => {
  const users = await prisma.user.findMany({});
  delete users.password
  res.status(200).json({ users });
});

module.exports = itemRoute;
