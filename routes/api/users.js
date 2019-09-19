const express = require("express");
const router = express.Router();


const User = require("../../models/User");

router.get("/", (req, res) => {
  User.find()
    .sort({ handle: 1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ usernotfound: 'User not found'}));
});

router.get("/:user_id", (req, res) => {
  User.find( {handle: req.params.user_id })
    .sort({ handle: 1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ usernotfound: 'User not found'}));
});

module.exports = router;