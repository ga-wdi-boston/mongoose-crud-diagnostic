'use strict';

const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    max: 200
  },
  startYear: String,
  endYear: String,
  ancestor: String
},{
  timestamps: true,
  toJSON: { virtuals: true }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
