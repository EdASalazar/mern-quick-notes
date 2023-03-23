const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// POST /api/note
router.post('/', notesCtrl.create)
// GET /api/note/:id only the users notes
router.get('/:id', notesCtrl.userIndex)
// GET /api/note get all notes
router.get('/', notesCtrl.index)

module.exports = router;