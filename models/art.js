'use strict';

const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    limit: 200
  },
  startYear: {
    type: String,
  },
  endYear: {
    type: String,
  },
  ancestor: {
    type: String
  }

});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
