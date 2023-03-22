const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');

const noteSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    // will swithc to true after seeding
    required: false,
  },

}, {
  timestamps: true
});


module.exports = mongoose.model('Note', noteSchema);