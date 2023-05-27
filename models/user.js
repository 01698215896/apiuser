const mongoose = require("mongoose");

const listUser = mongoose.Schema({
  firstName: {
    type: String,
  },
  id: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  face: {
    type: String,
  },
  git: {
    type: String,
  },
  twitter: {
    type: String,
  },
  youtube: {
    type: String,
  },
  img: {
    type: String,
  },
  insta: {
    type: String,
  },
  music: {
    type: String,
  },
  listmusic: {
    type: [
      {
        id: String,
        time: String,
        img: String,
        name: String,
        casy: String,
        url: String,
        title: String,
        
      },
    ],
  },
});

const user = mongoose.model("users", listUser);

module.exports = user;
