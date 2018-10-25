const express = require("express");
const router = express.Router();

router.get("allUsers", (req, res) => res.json({
    name: res.name,
    location: res.myLocation,
    age: res.myAge,
    gender: res.myGender
}));

module.exports = router;