const router = require("express").Router();
const notesData = require("../db/db.json");
const fs = require("fs");

router.get("/", (req, res) => {
  const displayNotes = notesData.map((item, idx) => {
    return {
      id: idx,
      title: item.title,
      text: item.text,
    };
  });
  res.json(displayNotes);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  //   console.log(req.body);
  if (title && text) {
    const newNote = {
      title,
      text,
    };
    console.log(newNote);
    notesData.push(newNote);
    const noteString = JSON.stringify(notesData, null);
    fs.writeFile("./db/db.json", noteString);
  }
  res.json(req.body);
});

router.delete("/:title", (req, res) => {
  notesData.splice();
});

module.exports = router;
