const User = require('../../models/user');
const Note = require('../../models/note')


module.exports = {
  create,
  index,
  // userIndex
};

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err){
    res.status(400).json(err)
  }
}

async function index(req, res) {
  const notes = await Note.find({user: req.user._id}).sort('createdAt').exec();
  res.json(notes);
  console.log("The controller",notes)
}

// async function userIndex(req, res) {
//   const notes = await Note.find(req.params.id)
//   res.json(notes);
//   console.log(notes)
// }