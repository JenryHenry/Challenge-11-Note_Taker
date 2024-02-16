const router = require("express").Router();
const notesData = require("../db/db.json");

router.get("/", (req, res) => {
  res.json(notesData);
});

router.post("/", (req, res) => {});

router.delete("/:index", (req, res) => {});

module.exports = router;
