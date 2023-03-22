require('dotenv').config();
require('./config/database');

const Note = require("./models/note")

(async function() {
  await Note.deleteMany({});
  const notes = await Note.create([
    {text: "A doe", user: null},
    {text: "A deer", user: null},
  ]);
  console.log(items)
  process.exit();
})