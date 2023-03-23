const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// POST /api/note
router.post('/', notesCtrl.create)

module.exports = router;