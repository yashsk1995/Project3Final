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
>>>>>>> master
});

module.exports = User = mongoose.model("users", UserSchema);


