const fs = require("fs");

module.exports = (fn) => (req, res, next) =>
  fn(req, res, next)
    .catch(next)
    .finally(() => {
      if (req.file) {
        fs.unlink(req.file?.path, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("File deleted successfully");
        });
      }
    });
