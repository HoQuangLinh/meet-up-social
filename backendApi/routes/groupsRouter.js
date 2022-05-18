const express = require("express");
const router = express.Router();
const { Group } = require("../models/Group");

router.get("/", async function (req, res) {
  const groups = await Group.find();
  return res.send(groups);
});

//Create a group
router.post("/create", function (req, res) {});

module.exports = router;
