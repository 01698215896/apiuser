const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();
app.use((req, res, next) => {
  // dev server
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  // push github
  res.setHeader("Access-Control-Allow-Origin", "https://01698215896.github.io");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
require("dotenv").config();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("helo my server success!");
});

// post user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// get User
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// get User id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await User.findOne({ id: id });
    res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// update users
app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id: id });
    const users = await User.findByIdAndUpdate(user, req.body);
    if (!users) {
      res.status(404).json({ message: `khong tim thay ${id}` });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// delete users
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id: id });

    const users = await User.findByIdAndDelete(user, req.body);
    if (!users) {
      res.status(404).json({ message: `khong tim thay ${id}` });
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log(`connect success mongoose server`);

  app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`);
  });
});
