const prisma = require("../config/prisma");

module.exports.createCar = async (data) => await prisma.car.create({ data });

module.exports.editCar = async (data, id) =>
  await prisma.car.update({ data, where: { id } });

module.exports.findManyTransac = async (id) =>
  await prisma.transaction.findMany({ where: { carId: +id } });

module.exports.updateTransac = async (data, carId) =>
  await prisma.transaction.updateMany({ data, where: { carId } });

module.exports.deletCar = async (id) =>
  await prisma.car.delete({ where: { id: +id } });
