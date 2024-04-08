module.exports.notFound = async (req, res) =>
  res.status(404).json({ message: "page not found" });
