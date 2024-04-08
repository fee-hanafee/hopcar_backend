const prisma = require("../config/prisma");

module.exports.findEmail = async (where) =>
  await prisma.user.findFirst({ where });

  module.exports.createUser = async (data) => await prisma.user.create({data})