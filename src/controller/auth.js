const utils = require("../utils");
const repo = require("../repository");
const { CustomError } = require("../config/error");

module.exports.getMe = utils.catchError(async (req, res, next) => {
  const accessToken = utils.jwt.sign({ id: req.user.id, role: req.user.role });
  delete req.user.password;
  res.status(200).json({ user: req.user, accessToken });
});

module.exports.register = utils.catchError(async (req, res, next) => {
  const existUser = await repo.auth.findEmail({ email: req.body.email });

  if (existUser) throw new CustomError("EMAIL_IN_USE", "403_FORBIDDEN", 403);

  req.body.password = await utils.bcrypt.hashed(req.body.password);

  await repo.auth.createUser(req.body);

  res.status(201).json({ message: "Register Success" });
});

module.exports.login = utils.catchError(async (req, res, next) => {
  const user = await repo.auth.findEmail({ email: req.body.email });

  if (!user)
    throw new CustomError("username or password is wrong", "WRONG_INPUT", 400);

  const result = await utils.bcrypt.compare(req.body.password, user.password);
  if (!result)
    throw new CustomError("username or password is wrong", "WRONG_INPUT", 400);

  const accessToken = utils.jwt.sign({ id: user.id, role: user.role });
  delete user.password;
  res.status(200).json({ accessToken, user });
});
