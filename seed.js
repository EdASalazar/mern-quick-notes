require('dotenv').config();
require('./config/database');

const Note = require("./models/note")

(async function(){
  await Note.deleteMany({});
  const notes = await Note.create([
    {text: "A doe"},
    {text: "A deer"},
    {text: "a female"},
    {text: "Deer"}
  ]);
  console.log(items)
  process.exit();
})