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
 }
});

module.exports = User = mongoose.model("users", UserSchema);


