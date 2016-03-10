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
  ancestor: String
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
