const router = require("express").Router();
const notesData = require("../db/db.json");
const fs = require("fs");

router.get("/", (req, res) => {
  const displayNotes = notesData.map((item, idx) => {
    return {
      id: idx + 1,
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
    saveData();
  }
  res.json(req.body);
});

const saveData = () => {
  const noteString = JSON.stringify(notesData, null, "\t");
  fs.writeFile("./db/db.json", noteString, () => {
    console.log("file written.");
  });
};

router.delete("/:id", (req, res) => {
  notesData.splice(parseInt(req.params.id) - 1, 1);
  saveData();
  res.send("Delete Successful!");
});

module.exports = router;
