const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
<<<<<<< HEAD
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
    type: Number,
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
=======
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
 aboutMe: {
   type: [String],
   required: true
 },
 interestedIn: {
   type: [String],
   required: true
 },
 date: {
   type: Date,
   default: Date.now
 },
 saved:{
   type:[String]
 },
 myAge: {
   type:Number
 },
 myGender: {
   type:String
 },
 myLocation: {
   type:String
 }
>>>>>>> b9d02bb42f9eb3de58531d2eded39d9e3f3fc032
});

module.exports = User = mongoose.model("users", UserSchema);
