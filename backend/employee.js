const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  avatar: String,
  id: Number,
  firstName: String,
  title: String,
  sex: String,
  startDate: String,
  officePhone: Number,
  cellPhone: Number,
  sms: Number,
  email: String,
  managerid: Number,
  managername: String,
  directReports: []
  // numberOfDirectReports: Number
});

const User = mongoose.model("user", userSchema);

module.exports = User;
