const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  myAge: {
    type: String,
    required: true
  },
  myGender: {
    type: String,
    required: true
  },
  myLocation: {
    type: String,
    required: true
  },
  aboutMe: {
    type: [String],
    required: false
  },
  interestedIn: {
    type: [String],
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: [String],
    required: false
  }
});

module.exports = User = mongoose.model("users", UserSchema);


