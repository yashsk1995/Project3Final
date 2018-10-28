const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  // .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router
.route("/:id/:Gender/:startAge/:EndAge/:Area")
.get(userController.findchoices);

router
.route("/:id/:saveid")
.get(userController.save);

router
.route("/remove/:id/:saveid")
.get(userController.removeArrayItem);

router
.route("/saveProfile/:id/:aboutMe/:interestedIn/:myLocation/:myGender/:myAge")
.get(userController.saveProfile);



module.exports = router;
