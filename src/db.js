const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/simple-mern";

mongoose.connect(MONGODB_URI);

module.exports = mongoose;
