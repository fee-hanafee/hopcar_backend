const jwt = require("jsonwebtoken");

module.exports.sign = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: process.env.JWT_ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES,
  });

module.exports.refresh = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    algorithm: process.env.JWT_ALGORITHM,
    expiresIn: process.env.JWT_REFRESH,
  });
