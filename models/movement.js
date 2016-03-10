'use strict';

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
  startYear: String,
  endYear: String,
  _ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'movement'
  }
},{
  timesstamp: true
});

const Movement = mongoose.model('movement', movementSchema);

module.exports = Movement;
