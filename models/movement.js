'use strict';

const mongoose = require("mongoose");

const movementSchema = new mongoose.Schema({
  name: {
    type: String.
    required: true
  },
  description: String,
  start_year: String,
  end_year: String,
  ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movement',
  }
});

module.exports = Movement;
// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.
