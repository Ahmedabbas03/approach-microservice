const express = require("express");
const router = express.Router();
const { getScores } = require("../controllers/interpretController");

router.post("/interpret", getScores);

module.exports = router;
