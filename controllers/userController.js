const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Users
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Users.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findchoices: function(req, res) {
    console.log("am i hitting this route?");
    console.log(req.params.startAge);
    console.log(req.params.EndAge);
    console.log(req.params.Gender);
    console.log(req.params.Area);
    console.log(req.params.id);
    db.Users.find({
      _id: { $ne: req.params.id },
      myAge: {
        $gt: parseInt(req.params.startAge),
        $lt: parseInt(req.params.EndAge)
      },
      myGender: req.params.Gender,
      myLocation: req.params.Area
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Users.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Users.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save:function(req,res){
    console.log("saveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee?");
    console.log(req.params.id);
    console.log(req.params.saveid);

    db.Users
    .findByIdAndUpdate({"_id":req.params.id},
    {$push:{saved: req.params.saveid }},{'new':true}).then(console.log("done"))
  },
  removeArrayItem:function(req,res){
    console.log("dedlete?");
    console.log(req.params.id);
    console.log(req.params.saveid);
    db.Users.update(
      { _id: id },
      { $pull: { 'saved': req.params.saveid } }
    );
    // db.Users
    // .findByIdAndUpdate({"_id":req.params.id},
    // {$push:{saved: req.params.saveid }},{'new':true}).then(console.log("done"))
  },
  saveProfile:function(req,res){
    console.log("profile!!!!!!!!!!");
    console.log(req.params.id)
    console.log(req.params.aboutMe)
    console.log(req.params.interestedIn)
    console.log(req.params.myLocation)
    console.log(req.params.myGender)
    console.log(req.params.myAge)
    db.Users.update(
      { _id: req.params.id },
     {
          "aboutMe": req.params.aboutMe.split(","),
          "interestedIn": req.params.interestedIn.split(","),
          "myLocation": req.params.myLocation,
          "myGender":req.params.myGender,
          "myAge":req.params.myAge
           }
      
   ).then(console.log("done"))
  }
};



// { _id: req.data.id },
// {
//      "aboutMe": req.data.aboutMe,
//      "interestedIn": req.data.interestedIn,
//      "myLocation": req.data.myLocation,
//      "myGender":req.data.myGender,
//      "myAge":req.data.myAge
//       }