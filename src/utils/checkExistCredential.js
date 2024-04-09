const { CustomError } = require("../config/error");

function checkExistCredential(credential, input) {
  if (credential?.email == input?.email)
    throw new CustomError("EMAIL_IN_USE", "403_FORBIDDEN", 403);
}

module.exports = checkExistCredential;
