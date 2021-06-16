const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://mineralshop:akilimali@cluster0.sjku4.mongodb.net/mineralshop";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

module.exports = mongoose;
