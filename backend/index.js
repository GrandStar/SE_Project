const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./employee");
const PORT = 3000;
const app = express();
const db = mongoose.connection;
const imgPath = "./src/images";
const router = express.Router();
const fs = require("fs");
// var fs = require('fs');
// var mongo = require('mongodb');
// var Grid = require('gridfs');

mongoose.connect("mongodb://127.0.0.1:27017/employeeManagement");
app.use(bodyParser.json("reviver"));
db.once("open", function() {
  console.log("mongodb connected.");
});

app.get("/users", (req, res) => {
  User.find({}, function(err, users) {
    if (err) throw err;
    res.status(200).json(users);
  });
});

// app.get("/users/:firstName", (req, res) => {
//   let firstName = String(req.params.firstName);
//   User.find({ firstName: firstName }, function(err, user) {
//     if (err) throw err;
//     res.send(user);
//   });
// });

// get one user
app.get("/users/:id", (req, res) => {
  let id = String(req.params.id);
  console.log("get the userid of " + id);
  User.find({ _id: id }).then(e => res.json(e));
});

// get manager
app.get("/manager/:id", (req, res) => {
  let id = String(req.params.managername);
  console.log("get the managername of " + managername);
  User.find({ _id: id }).then(e => res.json(e));
});

// get manager list

// post user
app.post("/users", (req, res) => {
  User.create(req.body, function(err, results) {
    if (err) console.log(err);
    console.log(results);
  });
  res.send(req.body);
  console.log("Created a user!");
});

//delete employee
app.delete("/users/:id", (req, res) => {
  let id = String(req.params.id);
  console.log(id + "id will delete");
  User.deleteOne({ _id: id }, function(err, user) {
    if (err) throw err;
    res.send("User deleted!");
  });
});

app.put("/users/:id", (req, res) => {
  let id = String(req.params.id);
  console.log(id);
  User.findOneAndUpdate(
    { _id: id },
    {
      firstName: req.body.firstName,
      title: req.body.title,
      sex: req.body.sex,
      age: req.body.age,
      managerid: req.body.managerid,
      userid: req.body.userid,
      startDate: req.body.startDate,
      officePhone: req.body.officePhone,
      cellPhone: req.body.cellPhone,
      sms: req.body.sms,
      email: req.body.email,
      avatar: req.body.avatar
    },
    function(err, user) {
      if (err) console.log(err);
      res.send("User successfully updated!");
    }
  );
});

// edit reporters
app.put("/editReports/:id", (req, res) => {
  User.findOneAndUpdate({ _id: id }, req.body, (err, doc) => {
    if (err) {
      res.json({ success: err });
    }
    res.json(req.body);
  });
});

app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
