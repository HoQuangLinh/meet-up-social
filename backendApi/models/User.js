const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

let user_Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },

  gender: {
    type: String,
  },
  imageUrl: {
    type: String,
  },

  birthday: {
    type: Date,
  },
  registerDay: {
    type: Date,
    default: Date.now,
  },
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
});

user_Schema.plugin(uniqueValidator);

exports.User = mongoose.model("User", user_Schema);
