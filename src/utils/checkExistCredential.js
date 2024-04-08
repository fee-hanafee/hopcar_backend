const { CustomError } = require("../config/error");

function checkExistCredential(credential, input) {
  if (credential?.email == input?.email)
    throw new CustomError("EMAIL_IN_USE", "403_FORBIDDEN", 403);
  if (credential?.phone == input?.mobile)
    throw new CustomError("MOBILE_IN_USE", "403_FORBIDDEN", 403);
  if (credential?.company == input?.username)
    throw new CustomError("COMPANY_IN_USE", "403_FORBIDDEN", 403);
}

module.exports = checkExistCredential;
