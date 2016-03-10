"use strict";
// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

const mongoose = require('mongoose');
const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    maxlength: 200
  },
  startYear: {
    type: String
  },
  endYear: {
    type: string
  }
},{
  timestamps: true,
  toObject: {virtuals: true }, // relate to virtual attributes
  toJSON: { virtuals: true}
});


const  Movement = mongoose.mode('Movement', movementSchema);

module.exports = Movement;
