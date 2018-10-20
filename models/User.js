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
  date: {
    type: Date,
    default: Date.now
  },

  avatarUrl: { type: String, required: true },
  aboutMeKeywords: { type: Array, required: true },
  contactNumber: {
    type: String,
    required: true,
    match: "^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$"
  },
  lookingFor: { type: Array, required: true },
  description: { type: String, required: true },
  Name: { type: String, required: true },
  Gender: { type: String, required: true },
  Age: { type: String, required: true },
  City: { type: String, required: true }
});

module.exports = User = mongoose.model("users", UserSchema);
