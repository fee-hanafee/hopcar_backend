const utils = require("../utils");
const repo = require("../repository");
const { CustomError } = require("../config/error");

function checkManger(user) {
  if (user.role !== "Manager")
    throw new CustomError("unauthorized", "401_UNAUTHORIZED", 401);
}

module.exports.createCar = utils.catchFinal(async (req, res, next) => {
  checkManger(req.user);

  if (req.file?.path) {
    req.body.image = await utils.cloundinaryUpload.upload(req.file.path);
  }
  const car = await repo.manager.createCar(req.body);

  res.status(201).json({ car });
});

module.exports.editCar = utils.catchFinal(async (req, res, next) => {
  checkManger(req.user);

  const id = +req.body.id;
  delete req.body.id;

  if (req.file?.path)
    req.body.image = await utils.cloundinaryUpload.upload(req.file.path);

  if (req.body?.licenseBody) req.body.licenseBody = +req.body.licenseBody;

  const car = await repo.manager.editCar(req.body, id);

  res.status(200).json({ car });
});

module.exports.deleteCar = utils.catchError(async (req, res, next) => {
  checkManger(req.user);
  const { carId } = req.params;
  // console.log(req.params);
  // const transac = await repo.manager.findManyTransac(carId);

  // if (transac.length != 0) {
  //   await repo.manager.updateTransac({ carId: 99999, carId });
  // }

  await repo.manager.deletCar(carId);

  res.status(200).json({ message: "delete success" });
});
