const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// POST /api/note
router.post('/', notesCtrl.create)
router.get('/:id', notesCtrl.index)

module.exports = router;