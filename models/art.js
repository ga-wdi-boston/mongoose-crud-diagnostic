'use strict';
// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  description: String,
  startingYear: String,
  endingYear: String,
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

exampleSchema.virtual('ancestor').get(function length() {
  return this.text.length;
});

const Art = mongoose.model('Art', exampleSchema);

module.exports = Art;
