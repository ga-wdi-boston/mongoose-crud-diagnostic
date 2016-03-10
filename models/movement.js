'use strict';

const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  validator: {
     description: { $regex: /\.{0, 200}/ }
  },
  startYear: String,
  endYear: String,
  _ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movement',
  }
},{
  timestamps: true
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
