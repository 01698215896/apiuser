const mongoose = require('mongoose');

const listUser = mongoose.Schema({
    fistname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
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
      insta: {
        type: String,
      },
})

const user = mongoose.model("users", listUser)

module.exports = user;
