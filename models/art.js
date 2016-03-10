'use strict';

const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  startYear: {
    type: Number,
    required: true
  },
  endYear: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
