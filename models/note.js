const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');

const noteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

}, {
  timestamps: true
});


module.exports = mongoose.model('Note', noteSchema);